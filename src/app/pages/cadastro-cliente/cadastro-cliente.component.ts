import { Component } from '@angular/core';
import { StepsFormularioComponent } from './steps/steps-formulario.component';
import { Router } from '@angular/router';

import { routes } from '../../routes';

@Component({
  selector: 'app-cadastro-cliente',
  imports: [StepsFormularioComponent],
  templateUrl: './cadastro-cliente.component.html',
})
export class CadastroClienteComponent {
  constructor(private router: Router) {}

  voltarHome() {
    this.router.navigate([routes.home]);
  }
}
