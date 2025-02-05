import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../../../../components';
import { ContaService, TransacaoService } from '../../../../services';
import { Conta, Transacao, Usuario } from '../../../../classes';
import { formatarData } from '../../../../utils';
import Swal from 'sweetalert2';

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

  consultarConta(numeroConta: string): void {
    this.contaService.getNumeroContaAPI(numeroConta).subscribe({
      next: (resp) => (this.conta = resp),
      error: (erro) => {
        console.error(erro);
      },
    });
  }

  efetuarPagamento(transacao: Transacao): void {
    this.transacao.tipoTransacao = 2; // acho que já está enviando
    this.transacao.contaOrigem = sessionStorage.getItem('auth_token') as string;
    this.transacao.contaDestino = this.conta.id;
    this.transacao.dataTransacao = formatarData(new Date());
    this.transacao.descricao = transacao.descricao;
    this.transacao.valor = transacao.valor;
    this.transacaoService.postTransacaoAPI(this.transacao).subscribe({
      error: (erro) => {
        console.error(erro);
        Swal.fire({
          title:
            'Não foi possível fazer essa transação verifique o saldo ou o número da conta.',
          icon: 'error',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });
      },
    });
  }
}
