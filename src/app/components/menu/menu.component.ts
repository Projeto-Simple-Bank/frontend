import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink], // vincula a rota ao componente que a usa
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
