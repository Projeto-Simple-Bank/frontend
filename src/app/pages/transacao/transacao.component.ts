import { Component } from '@angular/core';
import { TransferenciaComponent } from "./sessao/transferencia/transferencia.component";
import { AreaPixComponent } from "./sessao/area-pix/area-pix.component";

@Component({
  selector: 'app-transacao',
  imports: [TransferenciaComponent, AreaPixComponent],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})

export class TransacaoComponent {

}
