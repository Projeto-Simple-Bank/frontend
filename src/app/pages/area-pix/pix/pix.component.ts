import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

import { CardComponent } from '../../../components';
import { PixService, TransacaoService } from '../../../services';
import { Pix, Transacao } from '../../../classes';
import { formatarData, formatarPreco } from '../../../utils';

@Component({
  selector: 'app-pix',
  imports: [CardComponent, FormsModule],
  templateUrl: './pix.component.html',
})
export class PixComponent {
  constructor(
    private pixService: PixService,
    private transacaoService: TransacaoService
  ) {}

  pix: Pix = new Pix();
  transacao: Transacao = new Transacao();

  consultarChavePix(chavePix: string): void {
    this.pixService
      .getChavePixAPI(chavePix)
      .subscribe((resp) => (this.pix = resp));
  }

  comprovantePagamento(): void {
    this.transacaoService
      .getTransacaoIdAPI(this.transacao.id as string)
      .subscribe((resp) => (this.transacao = resp));
  }

  get valorFormatado(): string {
    return formatarPreco(this.transacao.valor as number);
  }

  efetuarPagamento(transacao: Transacao): void {
    this.transacao.tipoTransacao = 1;
    this.transacao.contaOrigem = sessionStorage.getItem('auth_token') as string;
    this.transacao.contaDestino = this.pix.conta?.id as string;
    this.transacao.dataTransacao = formatarData(new Date());
    this.transacao.descricao = transacao.descricao;
    this.transacao.valor = Number(
      transacao.valor?.toString().replace(',', '.')
    );

    this.transacaoService.postTransacaoAPI(this.transacao).subscribe({
      next: (resp) => {
        console.log('ID TRANSACAO', resp);
        this.transacao.id = resp;
      },
      error: (erro) => {
        console.error(erro);
        Swal.fire({
          title:
            'Não foi possível fazer essa transação verifique o saldo ou a chave pix da conta.',
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
