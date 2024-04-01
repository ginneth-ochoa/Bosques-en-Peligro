import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NoticiasComponent } from './page/noticias/noticias.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent 
    },
    {
        path: 'noticias', 
        component: NoticiasComponent 
    } // Esta línea define la ruta por defecto para mostrar el componente HomeComponent
];
