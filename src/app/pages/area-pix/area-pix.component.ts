import { Component } from '@angular/core';

import { CadastroPixComponent } from './cadastro-pix';
import { ListarPixsComponent } from './listar-pixs';
import { PixComponent } from './pix';
import { BoxContentComponent } from '../../components/box-content/box-content.component';

@Component({
  selector: 'app-area-pix',
  imports: [
    CadastroPixComponent,
    ListarPixsComponent,
    PixComponent,
    BoxContentComponent,
  ],
  templateUrl: './area-pix.component.html',
})
export class AreaPixComponent {}
