import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './screenOne/shared/footer/footer.component';
import { NavComponent } from "./screenOne/shared/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Iaems';
  firebaseConfig = {
    apiKey: "AIzaSyD_3e0jaoYADzbFLTl0Qy8_mI9FkHfpH1A",
    authDomain: "iaems-angular-4b1fd.firebaseapp.com",
    projectId: "iaems-angular-4b1fd",
    storageBucket: "iaems-angular-4b1fd.firebasestorage.app",
    messagingSenderId: "678265456391",
    appId: "1:678265456391:web:6749e592ed74b2d69227a2"
  };
  app = initializeApp(this.firebaseConfig);
}