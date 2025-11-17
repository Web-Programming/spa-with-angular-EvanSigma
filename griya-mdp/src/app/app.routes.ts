import { Routes } from '@angular/router';
import { Home as HomeComponent } from './home/home';
import { Profile } from './profile/profile';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Register } from './register/register';
import { Detail } from './detail/detail';

export const routes: Routes = [
    //mengatur halaman utama
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'profile',
        component: Profile,
        
    },
    {
        path: 'contact',
        component: Contact,
        
    },
    {
        path: 'login',
        component: Login,
        
    },
    {
        path: 'register',
        component: Register,
        
    },
    {
        path: "property/:id",           // ← Route dengan parameter
        component: Detail,
        title: 'Detail Property - Griya MDP'
    },
    {
        path: "**",                      // ← Wildcard untuk 404
        redirectTo: "",
        pathMatch: 'full'
    }
];
