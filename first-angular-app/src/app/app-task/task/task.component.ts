import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userTaskInterface } from './task.model';

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true})
  userTask!: userTaskInterface;
  @Output()
  completedTask = new EventEmitter<string>();

  completeTask() {
    return this.completedTask.emit(this.userTask.id);
  }
}
