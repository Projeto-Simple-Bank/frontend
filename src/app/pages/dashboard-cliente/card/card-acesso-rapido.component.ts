import { Component } from '@angular/core';

import { CardComponent } from '../../../components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-acesso-rapido',
  imports: [CardComponent, RouterLink],
  templateUrl: './card-acesso-rapido.component.html',
})
export class CardAcessoRapidoComponent {
  constructor() {}
}
