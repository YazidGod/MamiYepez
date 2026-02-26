import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

type Seccion = 'agua' | 'leche' | 'frutos' | 'flores' | 'combinada';

interface FilaGelatina {
  tamano: string;
  precio: number;
}

@Component({
  selector: 'app-pagina-gelatinas',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pagina-gelatinas.html',
  styleUrl: './pagina-gelatinas.css',
})
export class PaginaGelatinas {

  // Estado de visibilidad: una sección activa a la vez
  aguaVisible = true;
  lecheVisible = false;
  frutosVisible = false;
  floresVisible = false;
  combinadaVisible = false;

  /**
   * Cambia la sección visible y oculta las demás.
   */
  mostrar(seccion: Seccion) {
    this.aguaVisible = seccion === 'agua';
    this.lecheVisible = seccion === 'leche';
    this.frutosVisible = seccion === 'frutos';
    this.floresVisible = seccion === 'flores';
    this.combinadaVisible = seccion === 'combinada';
  }

  // Imágenes
  img = {
    agua: '',
    leche: '',
    frutos: '',
    flores: '',
    combinada: ''
  };

  // Datos
  tablas = {
    agua: [
      { tamano: 'Mediana', precio: 180 },
    ] as FilaGelatina[],
    leche: [
      { tamano: 'Mediana', precio: 280 },
    ] as FilaGelatina[],
    frutos: [
      { tamano: 'Mediana', precio: 250 },
    ] as FilaGelatina[],
    flores: [
      { tamano: 'Mediana', precio: 300 },
    ] as FilaGelatina[],
    combinada: [
      { tamano: 'Mediana', precio: 230 },
    ] as FilaGelatina[]
  };
}
