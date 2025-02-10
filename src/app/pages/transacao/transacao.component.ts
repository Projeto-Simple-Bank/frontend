import { Component } from '@angular/core';

import { BoxContentComponent } from '../../components';
import { TedComponent, BoletoComponent } from './pagamentos';

@Component({
  selector: 'app-transacao',
  imports: [BoxContentComponent, TedComponent, BoletoComponent],
  templateUrl: './transacao.component.html',
})
export class TransacaoComponent {}
