import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoService } from './todo.service';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodouserdetailsComponent } from './todouserdetails/todouserdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodouserdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
