import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../../components';
import { PixService } from '../../../services';
import { Conta, Pix } from '../../../classes';

@Component({
  selector: 'app-listar-pixs',
  imports: [CardComponent, CommonModule],
  templateUrl: './listar-pixs.component.html',
})
export class ListarPixsComponent implements OnInit {
  constructor(private pixService: PixService) {}

  pix: Pix[] = [];
  conta: Conta = new Conta();

  ngOnInit(): void {
    this.conta.id = sessionStorage.getItem('auth_token') as string;

    this.pixService
      .getListarPixAPI(this.conta.id)
      .subscribe((resposta) => (this.pix = resposta));
  }
}
