import { AppHeaderComponent } from './app-header/app-header.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppUserComponent } from './app-user/app-user.component';
import { AppTaskComponent } from './app-task/app-task.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppUserComponent, AppTaskComponent]
})
export class AppModule {}
