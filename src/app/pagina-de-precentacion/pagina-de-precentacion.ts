import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-de-precentacion',
  imports: [],
  templateUrl: './pagina-de-precentacion.html',
  styleUrl: './pagina-de-precentacion.css',
})
export class PaginaDePrecentacion {
  claseDestacada = [
    { titulo: "Domina el Arte de la Repostería.", subtitulo: "De Cero a Experto.", descripcion: "¿Siempre has soñado con hornear el pastel perfecto? Nuestro curso integral está diseñado tanto para principiantes como para entusiastas que desean perfeccionar su técnica. Lo que aprenderás: Manejo de batidos, secretos de horneado, elaboración de cremas y técnicas avanzadas de decoración con fondant y buttercream.", boton: "Ver curso" }
  ]
}
