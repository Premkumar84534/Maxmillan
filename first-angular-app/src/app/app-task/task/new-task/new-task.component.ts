import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output()
  cancelEmit = new EventEmitter<boolean>();

  cancelNewTask(){
    console.log('about to return false');
    return this.cancelEmit.emit(false);
  }
}
