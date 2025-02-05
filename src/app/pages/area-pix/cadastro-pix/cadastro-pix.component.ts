import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

import { CardComponent } from '../../../components';
import { PixService } from '../../../services';
import { Conta, Pix } from '../../../classes';

@Component({
  selector: 'app-cadastro-pix',
  imports: [CardComponent, FormsModule],
  templateUrl: './cadastro-pix.component.html',
})
export class CadastroPixComponent {
  constructor(private pixService: PixService) {}

  pix: Pix = new Pix();
  conta: Conta = new Conta();

  criarChavePix(pix: Pix): void {
    this.pix.chavePix = pix.chavePix;
    this.conta.id = sessionStorage.getItem('auth_token') as string;

    this.pixService
      .postPixAPI({ chavePix: this.pix.chavePix, conta: { id: this.conta.id } })
      .subscribe({
        complete: () => {
          Swal.fire({
            title: 'Chave pix cadastrada!',
            icon: 'success',
            confirmButtonColor: '#e80070',
            timer: 3000,
            customClass: { title: 'alert' },
          });
        },
        error: (erro) => {
          console.error(erro);

          Swal.fire({
            title: 'Chave pix já existe nesta conta.',
            icon: 'error',
            confirmButtonColor: '#e80070',
            timer: 3000,
            customClass: { title: 'alert' },
          });
        },
      });
  }
}
