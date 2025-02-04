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
          timer: 1500,
          customClass: { title: 'alert' }, // arrumar o css
        });

        setTimeout(() => {
          this.router.navigate([routes.dashboard]);
        }, 3000);
      },
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
