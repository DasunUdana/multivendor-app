import { Component, OnInit } from '@angular/core';
import { Saloon } from '../saloon';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  contentArray: Saloon[] = [];
  constructor() { }

  ngOnInit() {
    const testSaloon = {
      name: 'Jaal Sallon',
      location: 'colombo',
      contactNumber: '0717958829',
      image: '../../assets/img/saloonImage.jpg',
      services: 'Hair, Facial, Reborn, Pedicure',
      pricing: 'Hair - 500/=, Facial - 650/=, Reborn - 1000/=, Pedicure - 1500/='
    };

    const test: Saloon = new Saloon();
    test.setData(testSaloon);

    this.contentArray.push(test);
    this.contentArray.push(test);
    this.contentArray.push(test);
    this.contentArray.push(test);
    this.contentArray.push(test);
    this.contentArray.push(test);
    this.contentArray.push(test);
    this.contentArray.push(test);
  }

}
