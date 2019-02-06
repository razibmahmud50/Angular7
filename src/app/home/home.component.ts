import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { UsersInfo } from './users.model';
import { Datas } from './datas.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style = true;
  h3Style = false;
  user: any;
  datas: Datas[];
  userObj = new UsersInfo;

  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.user = {
      name: this.userObj.name,
      designation: this.userObj.designation,
      address: this.userObj.address,
    };
  }

}
