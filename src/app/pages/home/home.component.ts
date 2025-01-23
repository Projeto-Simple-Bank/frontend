import { Component } from '@angular/core';

import {
  AreaInicialComponent,
  SobreComponent,
  SobrePixComponent,
  SobreInvestimentosComponent,
  SegurancaDigitalComponent,
} from './sessao';

@Component({
  selector: 'app-home',
  imports: [
    AreaInicialComponent,
    SobreComponent,
    SobrePixComponent,
    SobreInvestimentosComponent,
    SegurancaDigitalComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
