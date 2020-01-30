import { Component, OnInit } from '@angular/core';
import {FireBaseService} from '../services/fire-base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: '';
  password: '';

  constructor(private service: FireBaseService) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.userName);
    console.log(this.password);
    this.service.loginUser(this.userName, this.password);
  }

}
