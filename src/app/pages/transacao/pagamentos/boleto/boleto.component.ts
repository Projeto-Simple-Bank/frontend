import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../../../../components';
import { BoletoService } from '../../../../services';
import { Boleto } from '../../../../classes';

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
    this.boleto.dataTrasacao = '31/01/2025';
    this.boleto.contaId = 'a3263580-2ecb-4a35-b7ce-8fdee4db99a5'; // paula

    this.boletoService.postBoletoAPI(boleto).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
