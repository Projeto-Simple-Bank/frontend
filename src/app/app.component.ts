import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AreaInicialComponent } from './pages/home/sessao/area-inicial/area-inicial.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, AreaInicialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
