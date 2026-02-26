import { Routes } from '@angular/router';
import { PaginaDePrecentacion } from './pagina-de-precentacion/pagina-de-precentacion';
import { PaginaClases } from './pagina-clases/pagina-clases';
import { PaginaPasteles } from './pagina-pasteles/pagina-pasteles';
import { PaginaGelatinas } from './pagina-gelatinas/pagina-gelatinas';
import { PaginaPostres } from './pagina-postres/pagina-postres';

export const routes: Routes = [
    { path: '', component: PaginaDePrecentacion },  // Ruta vacía = inicio
    { path: 'clases', component: PaginaClases },
    { path: 'pasteles', component: PaginaPasteles},
    { path: 'gelatinas', component: PaginaGelatinas },
    { path: 'postres', component: PaginaPostres },
];
