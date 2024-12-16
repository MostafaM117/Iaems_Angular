import { Component } from '@angular/core';
import { NavComponent } from "../shared/nav/nav.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { NotfoundComponent } from '../notfound/notfound.component';

@Component({
  selector: 'app-blogin',
  standalone: true,
  imports: [RouterModule,NavComponent, FooterComponent],
  templateUrl: './blogin.component.html',
  styleUrl: './blogin.component.css'
})
export class BloginComponent {

}
