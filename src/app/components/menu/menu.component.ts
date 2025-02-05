import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

import { routes } from '../../routes';
import { Conta } from '../../classes';
import { ContaService } from '../../services';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, private contasService: ContaService) {}
  mostrarMenu: boolean = true;
  isLogado: boolean = false;
  tipoUsuario: string = '';

  conta: Conta = new Conta();

  ngOnInit() {
    this.conta.id = sessionStorage.getItem('auth_token') as string;

    this.contasService
      .getClienteAPI(this.conta.id)
      .subscribe((resposta) => (this.conta = resposta));

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrarMenu = event.url !== '/login' && event.url !== '/cadastro';
      }

      this.isLogado = !!sessionStorage.getItem('auth_token');
      if (this.conta.id != '') {
        this.tipoUsuario = 'cliente';
      }
    });

    this.conta;
  }

  logout() {
    sessionStorage.removeItem('auth_token');
    this.isLogado = false;
    this.router.navigate([routes.home]);
  }
}
