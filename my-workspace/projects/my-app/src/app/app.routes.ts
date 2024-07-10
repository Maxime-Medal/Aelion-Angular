import { Routes } from '@angular/router';
import { HomeComponent } from 'auth';

export const routes: Routes = [
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    { path: '/home', redirectTo: ' ', component: HomeComponent }
    // {path:'', redirectTo:'', component: HomeComponent}
    // {path:'', redirectTo:'', component:}
];
