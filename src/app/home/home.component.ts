import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style = true;
  h3Style = false;
  users: object;

  myMethod() {
    this.data.firstClick();
  }

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
