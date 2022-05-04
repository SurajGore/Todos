import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  gettodolist(): Observable<any> {
    const url="https://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }

  getUsersData(Id:any): Observable<any> {
    const url="https://jsonplaceholder.typicode.com/users/"+Id;
    return this.http.get(url);
  }
}
