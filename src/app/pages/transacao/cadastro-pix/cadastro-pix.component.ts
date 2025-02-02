import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../../../components';
import { PixService } from '../../../services';
import { Pix } from '../../../classes';

@Component({
  selector: 'app-cadastro-pix',
  imports: [CardComponent, FormsModule],
  templateUrl: './cadastro-pix.component.html',
})
export class CadastroPixComponent {
  constructor(private pixService: PixService) {}

  pix: Pix = new Pix();

  criarChavePix(pix: Pix): void {
    if (this.pix.conta != null) {
      this.pix.conta.id = 'db6802af-a3ba-46cf-a65f-91b4cd0e134c';
    }

    this.pixService.postPixAPI(pix).subscribe({
      error: (erro) => {
        console.error(erro);
        // window.alert(erro);
      },
    });
  }
}
