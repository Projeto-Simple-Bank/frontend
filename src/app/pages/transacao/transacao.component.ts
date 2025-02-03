import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoxContentComponent, CardComponent } from '../../components';
import { BoletoService, TransacaoService } from '../../services';
import { Boleto, Transacao } from '../../classes';
import { CadastroPixComponent } from './cadastro-pix';
import { PixComponent, TedComponent, BoletoComponent } from './pagamentos';
import { ListarPixsComponent } from './listar-pixs';

@Component({
  selector: 'app-transacao',
  imports: [
    CardComponent,
    BoxContentComponent,
    FormsModule,
    CadastroPixComponent,
    PixComponent,
    TedComponent,
    ListarPixsComponent,
    BoletoComponent,
  ],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.css',
})
export class TransacaoComponent {
  constructor(
    private boletoService: BoletoService,
    private transacaoService: TransacaoService
  ) {}

  boleto: Boleto = new Boleto();
  transacao: Transacao = new Transacao();

  pagarBoleto(boleto: Boleto): void {
    this.boletoService.postBoletoAPI(boleto).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }

  efetuarPagamento(transasacao: Transacao): void {
    this.transacaoService.postTransacaoAPI(transasacao).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
