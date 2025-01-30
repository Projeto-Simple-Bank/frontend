import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services';
import { Usuario } from '../../classes';

@Component({
  selector: 'app-cadastro-cliente',
  imports: [FormsModule],
  templateUrl: './cadastro-cliente.component.html',
})
export class CadastroClienteComponent {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  usuario: Usuario = new Usuario();

  fechar(): void {
    this.router.navigate(['/mensagem-cadastro']);
  }

  cadastrar(usuario: Usuario): void {
    this.usuarioService.postUsuarioAPI(usuario).subscribe({
      complete: () => this.fechar(),
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
