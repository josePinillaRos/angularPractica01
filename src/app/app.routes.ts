import { Routes } from '@angular/router';
import { MiPaginaComponent } from './pages/mi-pagina/mi-pagina.component';
import { MiPagina2Component } from './pages/mi-pagina2/mi-pagina2.component';

export const routes: Routes = [
    { path: '' , component: MiPaginaComponent },
    { path: 'about' , component: MiPagina2Component},
    { path: '*' , redirectTo: '' },
];
