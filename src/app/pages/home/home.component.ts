import { Component } from '@angular/core';
import { AreaInicialComponent } from "./sessao/area-inicial/area-inicial.component";
import { SobreComponent } from "./sessao/sobre/sobre.component";
import { SobrePixComponent } from "./sessao/sobre-pix/sobre-pix.component";
import { SobreInvestimentosComponent } from "./sessao/sobre-investimentos/sobre-investimentos.component";
import { SegurancaDigitalComponent } from "./sessao/seguranca-digital/seguranca-digital.component";

@Component({
  selector: 'app-home',
  imports: [AreaInicialComponent, SobreComponent, SobrePixComponent, SobreInvestimentosComponent, SegurancaDigitalComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}