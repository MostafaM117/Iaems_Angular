import { Routes } from '@angular/router';
import { AboutComponent } from './screenOne/about/about.component';
import { NotfoundComponent } from './screenOne/notfound/notfound.component';
import { ContactusComponent } from './screenOne/contactus/contactus.component';
import { LoginComponent } from './screenOne/login/login.component';

export const routes: Routes = [
    {path:'',redirectTo:"about",pathMatch:"full"},
    {path:"about",component:AboutComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"login",component:LoginComponent},
    {path:'**',component:NotfoundComponent}
];
