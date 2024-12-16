import { Routes } from '@angular/router';
import { AboutComponent } from './screenOne/about/about.component';
import { NotfoundComponent } from './screenOne/notfound/notfound.component';
import { ContactusComponent } from './screenOne/contactus/contactus.component';
import { LoginComponent } from './screenOne/login/login.component';
import { BloginComponent } from './screenOne/blogin/blogin.component';
import { AloginComponent } from './screenTwo/alogin/alogin.component';

export const routes: Routes = [
    {path:'',redirectTo:"blogin/about",pathMatch:"full"},
    {
        path:"blogin",
        component:BloginComponent,
        children:[
            {path:"about",component:AboutComponent},
            {path:"contactus",component:ContactusComponent},
            {path:"login",component:LoginComponent},
        ]
    },
    {
        path:'alogin',
        component:AloginComponent,
        children:[
            {path:"dashboard",component:ContactusComponent},
        ]

    },
    {path:'**',component:NotfoundComponent}
];
