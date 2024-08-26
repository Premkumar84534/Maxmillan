import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './app-user.component.html',
  styleUrl: './app-user.component.css'
})
export class AppUserComponent {

  @Input({required: true})
  avatar!: string;

  @Input()
  name!: string;

  @Input()
  id!: string;

  @Output()
  select = new EventEmitter<string>();

  get imageSrc() {
    return "assets/users/"  + this.avatar;
  }

  onUserSelect() {
    console.log('Method not implemented.');
    this.select.emit(this.id);
  }
}
