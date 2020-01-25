import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSaloon: BehaviorSubject<boolean> = new BehaviorSubject(false);
  imgUrl = '../../assets/img/saloon.jpg';
  buttonTxt = 'Register As Customer';
  constructor() { }

  ngOnInit() {
    this.isSaloon.subscribe((value) => {
      if (true === value) {
        this.buttonTxt = 'Register As Saloon';
        this.imgUrl = '../../assets/img/saloon.jpg';
      } else {
        this.buttonTxt = 'Register As Customer';
        this.imgUrl = '../../assets/img/user.png';
      }
    });
  }
}
