import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './app-task.component.html',
  styleUrl: './app-task.component.css'
})
export class AppTaskComponent {
 /* @Input({required: true})
  name!: string;
*/
  @Input({required: true})
  userName?: string;
  @Input({required: true})
  userId?: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn basic',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Prototype',
      summary: 'Learn Prototype',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Describe issue template',
      dueDate: '2024-06-15'
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }


}
