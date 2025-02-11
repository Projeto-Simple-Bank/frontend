import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardAcessoRapidoComponent } from './card';
import {
  BoxContentComponent,
  PaginacaoComponent,
  CardComponent,
} from '../../components';
import { ContaService, TransacaoService } from '../../services';
import { Conta, Transacao } from '../../classes';
import { formatarPreco } from '../../utils';

@Component({
  selector: 'app-dashboard-cliente',
  imports: [
    CommonModule,
    BoxContentComponent,
    PaginacaoComponent,
    CardAcessoRapidoComponent,
    CardComponent,
  ],
  templateUrl: './dashboard-cliente.component.html',
})
export class DashboardClienteComponent implements OnInit {
  constructor(
    private contasService: ContaService,
    private transacaoService: TransacaoService
  ) {}

  ngOnInit(): void {
    this.conta.id = sessionStorage.getItem('auth_token') as string;

    this.transacaoService
      .getTransacaoDaContaAPI(this.conta.id)
      .subscribe((resposta) => (this.transacoes = resposta));

    this.contasService
      .getClienteAPI(this.conta.id)
      .subscribe((resposta) => (this.conta = resposta));

    this.valorFormatado;
  }

  valorFormatado(valor: any): string {
    return formatarPreco(Number(valor));
  }

  getTipoTransacao(tipo: number): string {
    return tipo === 1 ? 'Pix' : tipo === 2 ? 'Ted' : 'Boleto';
  }

  conta: Conta = new Conta();
  transacoes: Transacao[] = [];
}
