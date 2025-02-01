import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../../../../components';
import { TransacaoService } from '../../../../services';
import { Conta, Transacao, Usuario } from '../../../../classes';

@Component({
  selector: 'app-ted',
  imports: [CardComponent, FormsModule],
  templateUrl: './ted.component.html',
})
export class TedComponent {
  constructor(private transacaoService: TransacaoService) {}

  transacao: Transacao = new Transacao();
  conta: Conta = new Conta();
  usuario: Usuario = new Usuario();

  efetuarPagamento(transasacao: Transacao): void {
    this.transacao.tipoTransacao = 2; // acho que já está enviando
    this.transacao.contaOrigem = 'db6802af-a3ba-46cf-a65f-91b4cd0e134c'; // samira
    this.transacao.contaDestino = 'a3263580-2ecb-4a35-b7ce-8fdee4db99a5'; // paula
    this.transacao.dataTrasacao = '31/01/2025';

    this.transacaoService.postTransacaoAPI(transasacao).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
