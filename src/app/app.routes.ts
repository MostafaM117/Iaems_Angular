import { Routes } from '@angular/router';
import { AboutComponent } from './screenOne/about/about.component';
import { NotfoundComponent } from './screenOne/notfound/notfound.component';
import { ContactusComponent } from './screenOne/contactus/contactus.component';
import { LoginComponent } from './screenOne/login/login.component';
import { BloginComponent } from './screenOne/blogin/blogin.component';
import { AloginComponent } from './screenTwo/alogin/alogin.component';
import { DashboardComponent } from './screenTwo/section_1/dashboard/dashboard.component';
import { AccountComponent } from './screenTwo/section_3/account/account.component';
import { CoursesComponent } from './screenTwo/section_2/courses/courses.component';

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
            {path:'',redirectTo:"dashboard",pathMatch:"full"},
            {path:"dashboard",component:DashboardComponent},
            {path:"account",component:AccountComponent},
            {path:"courses",component:CoursesComponent},
            // {path:"about",component:AboutComponent},
        ]

    },
    {path:'**',component:NotfoundComponent}
];
