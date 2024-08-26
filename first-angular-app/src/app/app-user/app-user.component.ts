import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

/*type User = {
  avatar: string;
  name: string;
  id: string;
}*/

interface User {
  avatar: string;
  name: string;
  id: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './app-user.component.html',
  styleUrl: './app-user.component.css'
})
export class AppUserComponent {

  /*@Input()
  user!: {
    avatar: string;
    name: string;
    id: string;
  }*/

  @Input()
  user!: User; //Type/Interface User defined on top

  @Output()
  select = new EventEmitter<string>();

  get imageSrc() {
    return "assets/users/"  + this.user.avatar;
  }

  onUserSelect() {
    console.log('Method not implemented.');
    this.select.emit(this.user.id);
  }
}
