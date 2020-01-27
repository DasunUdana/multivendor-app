import { Component, OnInit } from '@angular/core';
import {FireBaseService} from "../services/fire-base.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private service: FireBaseService) { }

  ngOnInit() {
    this.service.createUser('dasun', 'test123');
  }

}
