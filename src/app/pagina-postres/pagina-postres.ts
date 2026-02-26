import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

type Seccion = 'chocoflan' | 'payqueso' | 'tartas' | 'cheesecake' | 'pays' | 'cupcake';

interface FilaPostre {
  tamano?: string;
  tipo?: string;
  sabor?: string;
  precio: number;
}

@Component({
  selector: 'app-pagina-postres',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pagina-postres.html',
  styleUrl: './pagina-postres.css',
})
export class PaginaPostres {

  // Estado de visibilidad: una sección activa a la vez
  chocoflanVisible = true;
  payquesoVisible = false;
  tartasVisible = false;
  cheesecakeVisible = false;
  paysVisible = false;
  cupcakeVisible = false;

  /**
   * Cambia la sección visible y oculta las demás.
   */
  mostrar(seccion: Seccion) {
    this.chocoflanVisible = seccion === 'chocoflan';
    this.payquesoVisible = seccion === 'payqueso';
    this.tartasVisible = seccion === 'tartas';
    this.cheesecakeVisible = seccion === 'cheesecake';
    this.paysVisible = seccion === 'pays';
    this.cupcakeVisible = seccion === 'cupcake';
  }

  // Imágenes
  img = {
    chocoflan: 'https://imgs.search.brave.com/HXNlCviJLSbzbQRh2FKJG8f0V1TEywaqilzTje-TXiY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sYWRlc3BlbnNhZGVsb3Nwb3N0cmVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyNS8wNS9DaG9jb2ZsYW4tSUlJLTEud2ViYw',
    payqueso: 'https://imgs.search.brave.com/oeAF21o6a9Ow86a-SjQ47J1svVa_BPYnvrJQjGsoVw0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbmlhcG9sLndvcmRwcmVzcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTAvMDYvcGF5LWRlLXF1ZXNvLTIuanBnP3c9MzAwJmg9MjI3',
    tartas: 'https://imgs.search.brave.com/eIR17V6QXsWMxoFBW66Z9KPAcbAhVneGlsNyhyhRMR8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFnLmJvbnZpdmV1ci5jb20vdGFydGFsZXRhcy1kZS1ob2phbGRyZS5qcGc',
    cheesecake: 'https://imgs.search.brave.com/ddPJNk8XQMoagUUC1zvAxKsyHuVfT3zjjF0-T7Jymg8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVtYmEuZHJlYW1zdGltZS5jb20vYi9ob21lLW1hZGUtYmx1ZWJlcnJ5LWNoZWVzZWNha2UtcmVjaXBlLWNoZWVzZS1waWUtc3dlZXQtZGVzc2VydC1tZW51LTM3MTQ0ODEzMy5qcGc',
    pays: 'https://imgs.search.brave.com/nwU5tQZDxhyRr7jE7-AwwswyWR969OLANUY5RU8L1DM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cucmVjZXRhc25lc3RsZS5jb20ubXgvc2l0ZS9kZWZhdWx0L2ZpbGVzL3N0eWxlcy9jcm9wcGVkX3JlY2lwZV9jYXJkX25ldy9wdWJsaWMvc3JoX3JlY2lwZXMvYzY0YTk2MGMzODVlMzljOTM1YzVhYzFjMmNjNWNjZGUuanBnLndlYnA/aXRvbD1HTXNvc3NxcQ',
    cupcake: 'https://imgs.search.brave.com/SH-sa94HWsTS5353VjvRi0a0S7BdzfFopj5DwNbHfXU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjQ3NDYwOS9wZXhlbHMtcGhvdG8tMjQ3NDYwOS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDA'
  };

  // Datos
  tablas = {
    chocoflan: [
      { tamano: 'Grande', precio: 550 },
    ] as FilaPostre[],
    payqueso: [
      { tamano: 'Grande', precio: 200 },
    ] as FilaPostre[],
    tartas: [
      { tamano: 'Individuales', precio: 25 },
    ] as FilaPostre[],
    cheesecake: [
      { tamano: 'Mediano', precio: 300 },
    ] as FilaPostre[],
    pays: [
      { tipo: 'Fruta', precio: 300 },
    ] as FilaPostre[],
    cupcake: [
      { sabor: 'Chocolate/Vainilla', precio: 20 },
    ] as FilaPostre[]
  };
}
