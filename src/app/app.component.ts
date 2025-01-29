import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// componentes que nós criamos
import { MenuComponent, SidebarComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
