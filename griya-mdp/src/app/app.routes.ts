import { Routes } from '@angular/router';
import { Home as HomeComponent } from './home/home';
import { Profile } from './profile/profile';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Register } from './register/register';

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
];
