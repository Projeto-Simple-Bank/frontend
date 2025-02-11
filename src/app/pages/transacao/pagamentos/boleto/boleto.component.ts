import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

import { CardComponent } from '../../../../components';
import { BoletoService, TransacaoService } from '../../../../services';
import { Boleto, Transacao } from '../../../../classes';
import { formatarData, formatarPreco } from '../../../../utils';

@Component({
  selector: 'app-boleto',
  imports: [CardComponent, FormsModule],
  templateUrl: './boleto.component.html',
})
export class BoletoComponent {
  constructor(
    private boletoService: BoletoService,
    private transacaoService: TransacaoService
  ) {}

  boleto: Boleto = new Boleto();

  consultarBoleto(codigoBoleto: string): void {
    this.boletoService.getBoletoAPI(codigoBoleto).subscribe({
      next: (resp) => (this.boleto = resp),
      error: (erro) => {
        console.error(erro);

        Swal.fire({
          title: 'Código do boleto inválido',
          icon: 'error',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });
      },
    });
  }

  get valorFormatado(): string {
    return formatarPreco(this.boleto.valor as number);
  }

  comprovantePagamento(): void {
    this.transacaoService
      .getTransacaoIdAPI(this.boleto.transacaoId as string)
      .subscribe((resp: any) => (this.boleto = resp));
  }

  efetuarPagamento(boleto: Boleto): void {
    this.boleto.statusBoleto = true;
    this.boleto.dataTransacao = formatarData(new Date());
    this.boleto.contaId = sessionStorage.getItem('auth_token') as string;
    this.boleto.codigo = boleto?.codigo;

    console.log('Boleto', this.boleto);

    this.boletoService.postBoletoAPI(this.boleto).subscribe({
      error: (erro) => {
        console.error(erro);

        Swal.fire({
          title: 'O boleto já foi pago',
          icon: 'error',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });
      },
    });

    this.comprovantePagamento();
  }
}
