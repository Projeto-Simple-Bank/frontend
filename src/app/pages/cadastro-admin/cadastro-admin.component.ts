import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../classes/admin';

@Component({
  selector: 'app-cadastro-admin',
  imports: [FormsModule],
  templateUrl: './cadastro-admin.component.html'
})
export class CadastroAdminComponent {
  constructor(private router: Router, private adminService: AdminService) {}
  
  admin: Admin = new Admin();

  fechar(): void {
      this.router.navigate(['/mensagem-cadastro']);
    }
  
    cadastrar(admin: Admin): void {
      this.adminService.postAdminAPI(admin).subscribe({
        complete: () => this.fechar(),
        error: (erro) => {
          console.error(erro);
          // window.alert(erro);
        },
      });
    }
}
