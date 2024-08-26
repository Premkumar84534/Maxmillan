import { DUMMY_USERS } from './dummy-users';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppUserComponent } from './app-user/app-user.component';
import { AppTaskComponent } from './app-task/app-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppUserComponent, AppTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId = 'u1';
  selectedUserName!: string;

  get selectedUser() {
    //return this.users.find((user) => user.id === this.selectedUserId)!;
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  userSelected(id: string) {
    this.selectedUserId = id;
  }
}
