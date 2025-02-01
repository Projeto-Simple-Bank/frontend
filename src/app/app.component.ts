import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// componentes que nós criamos
import { MenuComponent, SidebarComponent, FooterComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
}
