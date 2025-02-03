import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../../../../components';
import { BoletoService } from '../../../../services';
import { Boleto } from '../../../../classes';
import { formatarData } from '../../../../utils';

@Component({
  selector: 'app-boleto',
  imports: [CardComponent, FormsModule],
  templateUrl: './boleto.component.html',
})
export class BoletoComponent {
  constructor(private boletoService: BoletoService) {}

  boleto: Boleto = new Boleto();

  consultarBoleto(codigoBoleto: string): void {
    this.boletoService
      .getBoletoAPI(codigoBoleto)
      .subscribe((resp) => (this.boleto = resp));
  }

  efetuarPagamento(boleto: Boleto): void {
    this.boleto.statusBoleto = true;
    this.boleto.dataTransacao = formatarData(new Date());
    this.boleto.contaId = sessionStorage.getItem('auth_token') as string;
    this.boleto.codigo = boleto?.codigo;

    this.boletoService.postBoletoAPI(this.boleto).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
