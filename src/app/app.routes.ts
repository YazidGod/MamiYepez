import { Routes } from '@angular/router';
import { PaginaDePrecentacion } from './pagina-de-precentacion/pagina-de-precentacion';
import { PaginaClases } from './pagina-clases/pagina-clases';

export const routes: Routes = [
    { path: '', component: PaginaDePrecentacion },  // Ruta vacía = inicio
    { path: 'clases', component: PaginaClases }
];
