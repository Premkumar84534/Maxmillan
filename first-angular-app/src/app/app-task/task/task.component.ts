import { Component, Input } from '@angular/core';

interface userTaskInterface {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

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

}
