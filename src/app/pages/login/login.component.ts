import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContaService } from '../../services';
import { Login } from '../../classes';
@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private contaService: ContaService) {}

  conta: Login = new Login();

  logarConta(conta: Login): void {
    this.contaService.postLoginAPI(conta).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
