import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
        error: (erro) => {
          console.error(erro);
          // window.alert(erro);
        },
      });
  }
}
