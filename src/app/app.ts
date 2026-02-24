import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaDePrecentacion } from './pagina-de-precentacion/pagina-de-precentacion';
import { Footer } from './footer/footer';
import { PaginaClases } from './pagina-clases/pagina-clases';
import { MenuSuperior } from './menu-superior/menu-superior';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer,MenuSuperior],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pasteleria_Janett');
}
