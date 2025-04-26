import { Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { WilderProfilComponent } from './wilder-profil/wilder-profil.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';

export const routes: Routes = [
    {path: '', component: SearchFormComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'pokemons', component: PokemonsPageComponent},
    {path: 'wcs/:wildername', component: WilderProfilComponent, children: [
        {path: 'research', component: SearchFormComponent},
    ]},
    {path: '**', redirectTo: '/'},
];
