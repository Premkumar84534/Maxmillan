import { NewTask } from './../task.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output()
  cancelEmit = new EventEmitter<boolean>();

  @Output()
  submitEmit = new EventEmitter<NewTask>();
  title= '';
  summary= '';
  dueDate= '';

  cancelNewTask(){
    console.log('about to return false');
    return this.cancelEmit.emit(false);
  }

  onTaskSubmit() {
    this.submitEmit.emit(
      {
        id: new Date().getDate().toString(),
        title : this.title,
        summary: this.summary,
        dueDate: this.dueDate
      }
    )

  }
}
