import { Component } from '@angular/core';
import { FooterComponent } from "../../screenOne/shared/footer/footer.component";
import { AnavComponent } from "../anav/anav.component";
import { DashboardComponent } from "../section_1/dashboard/dashboard.component";
import { RouterModule } from '@angular/router';
import { AccountComponent } from '../section_3/account/account.component';

@Component({
  selector: 'app-alogin',
  standalone: true,
  imports: [FooterComponent, AnavComponent, RouterModule, AccountComponent, DashboardComponent],
  templateUrl: './alogin.component.html',
  styleUrl: './alogin.component.css'
})
export class AloginComponent {

}
