import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

import { ContaService } from '../../services';
import { LoginCliente } from '../../classes';
import { routes } from '../../routes';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private contaService: ContaService, private router: Router) {}
  conta: LoginCliente = new LoginCliente();

  logarConta(conta: LoginCliente): void {
    this.contaService.postLoginAPI(conta).subscribe({
      next: (resp) => sessionStorage.setItem('auth_token', resp.id as string),
      complete: () => {
        Swal.fire({
          title: 'Usuário logado!',
          icon: 'success',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });

        setTimeout(() => {
          this.router.navigate([routes.dashboard]);
        }, 5000);
      },
      error: (erro) => {
        console.error(erro);

        Swal.fire({
          title: 'O email ou senha estão incorretos.',
          icon: 'error',
          confirmButtonColor: '#e80070',
          timer: 3000,
          customClass: { title: 'alert' },
        });
      },
    });
  }
}
