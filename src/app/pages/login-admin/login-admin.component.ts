import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../classes/admin';
import Swal from 'sweetalert2';
import { routes } from '../../routes';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login-admin.component.html'
})
export class LoginAdminComponent {
    constructor(private router: Router, private adminService: AdminService) {}
    admin: Admin = new Admin();

    logar(): void {
      const dadosLogin = {
        email: this.admin.email,
        senha: this.admin.senha
      };

      this.adminService.postLoginAdminAPI(dadosLogin).subscribe({
        next: (resposta) => sessionStorage.setItem('auth_token', resposta.id as string),
        complete: () => {
          Swal.fire({
            title: 'Gerente logado!',
            icon: 'success',
            confirmButtonColor: '#e80070',
            timer: 3000,
            customClass: { title: 'alert' },
          });
  
          setTimeout(() => {
            this.router.navigate(['admin/dashboard']);
          }, 1000);
        },
        error: (erro) => {
          console.error('Erro no login:', erro);
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
