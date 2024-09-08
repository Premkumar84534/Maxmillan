import { Component } from '@angular/core'

import { HeaderComponent } from './header/header.component';
import {SupportComponent} from './dashboard/support/support.component'
import {ServerComponent} from './dashboard/server/server.component'
import {TrafficComponent} from './dashboard/traffic/traffic.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, SupportComponent, ServerComponent, TrafficComponent, DashboardItemComponent]
})
export class AppComponent {


}
