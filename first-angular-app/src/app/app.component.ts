import { DUMMY_USERS } from './dummy-users';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId ?: string;
  selectedUserName !: string;

  get selectedUser() {
    //return this.users.find((user) => user.id === this.selectedUserId)!;
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  userSelected(id: string) {
    this.selectedUserId = id;
  }
}
