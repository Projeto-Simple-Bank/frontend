import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// componentes que nós criamos
import { MenuComponent } from './components';
import { HomeComponent } from './pages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
