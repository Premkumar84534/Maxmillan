import { Injectable } from "@angular/core";
import { userTaskInterface } from './task/task.model';

@Injectable({ providedIn: "root"}) //- Alternate approach
export class AppTaskService {

  changeTaskStatus(userTaskInterface: userTaskInterface[], taskid: string) {
    console.log("Inside changeTaskStatus of service");
    return userTaskInterface.filter((task) => task.id !== taskid)
  }

}
