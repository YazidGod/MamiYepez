import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-clases',
  imports: [],
  templateUrl: './pagina-clases.html',
  styleUrl: './pagina-clases.css',
})
export class PaginaClases {
  clases = [
    { nombre: 'Clases de Repostería', descripcion: 'Aprende a hacer pasteles, galletas y más.', dia: 'Lunes y Miércoles' ,hora: '4-7', img: 'img/clases-reposteria.jpg'},
    { nombre: 'Clases de Decoración', descripcion: 'Domina el arte de decorar tus creaciones.', dia: 'Martes y Jueves' ,hora: '4-7', img: 'img/clases-decoracion.jpg'},
    { nombre: 'Clases de Panadería', descripcion: 'Aprende a hacer pan fresco y delicioso.', dia: 'Viernes' ,hora: '4-7', img: 'img/clases-panaderia.jpg'},
  ];
}
