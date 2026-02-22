import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaDePrecentacion } from './pagina-de-precentacion/pagina-de-precentacion';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PaginaDePrecentacion, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pasteleria_Janett');
}
