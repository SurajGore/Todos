import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  alltodolist:any = [];
  UserData:any = {};
  finaldata:any = [];
  
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.gettodolist();
  }
    gettodolist() {
      this.service.gettodolist().subscribe( 
        (response) => {
            this.alltodolist = response;
            this.finaldata = response;          
          console.log(this.alltodolist);
        });
    }

    Viewuserdetail(param:any){
      //console.log(param);
      
      this.service.getUsersData(param.userId).subscribe( 
        (response) => {
            this.UserData.id = param.id;
            this.UserData.title = param.title;
            this.UserData.userId = param.userId;
            this.UserData.name = response.name;
            this.UserData.email = response.email;

          console.log(this.UserData);
        });      

    }

    onChange(Ccomponent:any){
      console.log(Ccomponent);
      if(Ccomponent == "")
      {
        this.alltodolist = this.finaldata;
        return;
      }
      else{
          this.alltodolist = [];
          console.log(this.finaldata);
          this.finaldata.forEach((item:any) => {            
            if (item.completed.toString().includes(Ccomponent) || item.id.toString().includes(Ccomponent) || item.title.includes(Ccomponent)) 
              
            {
                this.alltodolist.push(item);
            }
          });
      }
    }

  }

