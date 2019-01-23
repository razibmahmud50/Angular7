import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClientModule) { }

  getUsersInfo() {
    return this.http.getUsers('https://reqres.in/api/users');
  }

  firstClick() {
    console.log('clicked');
  }

}
