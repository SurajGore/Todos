import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-todouserdetails',
  templateUrl: './todouserdetails.component.html',
  styleUrls: ['./todouserdetails.component.css']
})
export class TodouserdetailsComponent implements OnInit {
  @Input() UserData:any;
  
  constructor() { }

  ngOnInit(): void {
    
  } 

}
