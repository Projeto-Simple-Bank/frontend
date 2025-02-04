import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}
  showMenu: boolean = true;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = event.url !== '/login' && event.url !== '/cadastro';
      }
    });
  }
}
