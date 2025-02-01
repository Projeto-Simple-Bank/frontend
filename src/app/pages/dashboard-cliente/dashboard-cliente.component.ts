import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CardComponent } from './card';
import { BoxContentComponent, PaginacaoComponent } from '../../components';
import { ContaService, TransacaoService } from '../../services';
import { Conta, Transacao } from '../../classes';

@Component({
  selector: 'app-dashboard-cliente',
  imports: [
    CommonModule,
    BoxContentComponent,
    PaginacaoComponent,
    CardComponent,
  ],
  templateUrl: './dashboard-cliente.component.html',
})
export class DashboardClienteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contasService: ContaService,
    private transacaoService: TransacaoService
  ) {}

  ngOnInit(): void {
    this.conta.id = this.route.snapshot.paramMap.get('id') as string;

    this.transacaoService
      .getTransacoesAPI()
      .subscribe({ next: (resposta) => (this.transacoes = resposta) });

    this.contasService
      .getClienteAPI(this.conta.id)
      .subscribe((resposta) => (this.conta = resposta));
  }

  conta: Conta = new Conta();
  transacoes: Transacao[] = [];
}
