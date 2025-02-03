import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContaService } from '../../services';
import { LoginCliente } from '../../classes';
@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private contaService: ContaService) {}
  conta: LoginCliente = new LoginCliente();

  logarConta(conta: LoginCliente): void {
    this.contaService.postLoginAPI(conta).subscribe({
      next: (resp) => sessionStorage.setItem('auth_token', resp.id as string),
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
