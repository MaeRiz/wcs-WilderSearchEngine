import { Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { WilderProfilComponent } from './wilder-profil/wilder-profil.component';

export const routes: Routes = [
    {path: 'wcs/:wildername', component: WilderProfilComponent, children: [
        {path: 'research', component: SearchFormComponent},
    ]},
    {path: '', component: SearchFormComponent},
    {path: '**', redirectTo: '/'},
];
