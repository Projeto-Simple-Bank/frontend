import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsuarioService } from '../../../services';
import { Usuario } from '../../../classes';
import Swal from 'sweetalert2';
import { routes } from '../../../routes';

@Component({
  selector: 'app-steps-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './steps-formulario.component.html',
})
export class StepsFormularioComponent {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  step = 1;
  usuario: Usuario = new Usuario();

  dadosPessoais = {
    nome: '',
    cpf: '',
    rg: '',
    telefone: '',
  };

  endereco = {
    cep: '',
    rua: '',
    numero: null,
    bairro: '',
    cidade: '',
    estado: '',
  };

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  cadastrar(usuario: Usuario): void {
    console.log('Dados Pessoais:', this.dadosPessoais);
    console.log('Informações de Contato:', this.endereco);
    usuario = {
      nome: this.dadosPessoais.nome,
      cpf: this.dadosPessoais.cpf,
      rg: this.dadosPessoais.rg,
      telefone: this.dadosPessoais.telefone,
      cep: this.endereco.cep,
      rua: this.endereco.rua,
      numero: this.endereco.numero,
      bairro: this.endereco.bairro,
      cidade: this.endereco.cidade,
      estado: this.endereco.estado,
    };

    this.usuarioService.postUsuarioAPI(usuario).subscribe({
      complete: () => {
        Swal.fire({
          title: 'Usuário cadastrado!',
          text: 'O retorno da aprovação de conta será enviado para seu email dentro de uma semana.',
          icon: 'success',
          confirmButtonColor: '#e80070',
          timer: 10000,
          customClass: { title: 'alert' },
        });

        setTimeout(() => {
          this.router.navigate([routes.home]);
        }, 10000);
      },
      error: (erro) => {
        console.error(erro);
      },
    });
  }
}
