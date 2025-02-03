import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../../../../components';
import { ContaService, TransacaoService } from '../../../../services';
import { Conta, Transacao, Usuario } from '../../../../classes';
import { formatarData } from '../../../../utils';

@Component({
  selector: 'app-ted',
  imports: [CardComponent, FormsModule],
  templateUrl: './ted.component.html',
})
export class TedComponent {
  constructor(
    private transacaoService: TransacaoService,
    private contaService: ContaService
  ) {}

  transacao: Transacao = new Transacao();
  conta: Conta = new Conta();
  usuario: Usuario = new Usuario();

  onChangeConta(numeroConta: string) {
    console.log('Mudança no campo de conta:', numeroConta);
  }

  consultarConta(numeroConta: string): void {
    this.contaService.getNumeroContaAPI(numeroConta).subscribe({
      next: (resp) => (this.conta = resp),
      error: (erro) => {
        console.error('Erro ao consultar a conta:', erro);
      },
    });
  }

  efetuarPagamento(transasacao: Transacao): void {
    this.transacao.tipoTransacao = 2; // acho que já está enviando
    this.transacao.contaOrigem = sessionStorage.getItem('auth_token') as string;
    this.transacao.contaDestino = this.conta.id;
    this.transacao.dataTransacao = formatarData(new Date());
    this.transacao.descricao = transasacao.descricao;
    this.transacao.valor = transasacao.valor;
    this.transacaoService.postTransacaoAPI(this.transacao).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
