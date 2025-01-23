import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// componentes que nós criamos
import { MenuComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
