import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../../../../components';
import { PixService, TransacaoService } from '../../../../services';
import { Pix, Transacao } from '../../../../classes';

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
    this.pixService.getPixAPI(chavePix).subscribe((resp) => (this.pix = resp));
  }

  efetuarPagamento(transacao: Transacao): void {
    this.transacao.tipoTransacao = 1; // acho que já está enviando
    this.transacao.contaOrigem = 'db6802af-a3ba-46cf-a65f-91b4cd0e134c'; // samira
    this.transacao.contaDestino = this.pix.conta?.id as string;

    this.transacaoService.postTransacaoAPI(transacao).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
