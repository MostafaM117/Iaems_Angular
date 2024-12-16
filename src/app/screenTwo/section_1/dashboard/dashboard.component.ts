import { Component } from '@angular/core';
import { UpdatesComponent } from "../updates/updates.component";
import { CalendarComponent } from "../calendar/calendar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UpdatesComponent, CalendarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
