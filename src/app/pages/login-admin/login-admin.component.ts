import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../classes/admin';

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
        conta: this.admin.email,
        senha: this.admin.senha
      };

      this.adminService.postLoginAdminAPI(dadosLogin).subscribe({
        next: (resposta) => {
          console.log('Login bem-sucedido:', resposta);
          window.alert('Logado com sucesso!');
          
          // Redireciona para o Dashboard com o ID da conta
          this.router.navigate([`admin/dashboard/${resposta.id}`]);
        },
        error: (erro) => {
          console.error('Erro no login:', erro);
          window.alert('Erro ao fazer login. Verifique os dados e tente novamente.');
        },
      });
    }
}
