import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private router: Router) {}
  showFooter: boolean = true;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showFooter = event.url !== '/login' && event.url !== '/cadastro';
      }
    });
  }
}
