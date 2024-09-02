import { Component, Inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./task/new-task/new-task.component";
import { NewTask } from './task/task.model';
import { AppTaskService } from './app-task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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
  userId!: string;
  addTaskClick:boolean = false;

  private apptaskService = Inject(AppTaskService);

  //Alternate Approach
  /*constructor(appTaskService: AppTaskService) {
    this.apptaskService = appTaskService;
  }*/

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

  changeTaskStatus(taskid: string) {
    console.log("Inside changeTaskStatus");
    this.tasks = this.apptaskService.changeTaskStatus(this.tasks, taskid);
  }

  addTask() {
    this.addTaskClick = true;
  }

  onSaveTask(newTask: NewTask) {
    this.addTaskClick = false;
    this.tasks.push(
      {
        id: newTask.id,
        userId: this.userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate

      }
    )
  }

  cancelEmit(cancelClicked: boolean) {
    this.addTaskClick = cancelClicked;
  }
}
