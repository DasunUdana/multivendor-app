import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {FireBaseService} from '../services/fire-base.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {
  isSaloon: BehaviorSubject<boolean> = new BehaviorSubject(false);
  imgUrl = '../../assets/img/saloon.jpg';
  buttonTxt = 'Register As Customer';

  // Customer Registration Details
  customerName: '';
  customerEmail: '';
  customerContactNumber: '';
  customerPassword: '';
  customerRePassword: '';

  // Saloon Registration Details
  saloonName: '';
  saloonEmail: '';
  saloonContactNumber: '';
  saloonPassword: '';
  saloonRePassword: '';
  saloonLocation: '';
  saloonServices: '';

  constructor(private service: FireBaseService, private toastController: ToastController) { }

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

  register() {
    if (this.isSaloon) {
      const saloonObj = {
        customerName: this.saloonName,
        customerEmail: this.saloonEmail,
        contactNumber: this.saloonContactNumber,
        password: this.saloonPassword
      };

      this.service.createSaloon(saloonObj).then(() => {
        this.presentToast('Saloon Login Created', false);
      }).catch((err) => {
        this.presentToast(err, true);
      });

      this.clearSaloonFields();
    } else {
      const userObj = {
        customerName: this.customerName,
        customerEmail: this.customerEmail,
        contactNumber: this.customerContactNumber,
        password: this.customerPassword
      };

      this.service.createUser(userObj).then(() => {
        this.presentToast('User Created', false);
      }).catch((err) => {
        this.presentToast(err, true);
      });

      this.clearCustomerFields();
    }
  }

  async presentToast(msg, isError) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      color: isError ? 'danger' : 'success'
    });
    toast.present();
  }

  clearCustomerFields() {
    this.customerName = '';
    this.customerEmail = '';
    this.customerContactNumber = '';
    this.customerPassword = '';
    this.customerRePassword = '';
  }

  clearSaloonFields() {
    this.saloonName = '';
    this.saloonEmail = '';
    this.saloonContactNumber = '';
    this.saloonPassword = '';
    this.saloonRePassword = '';
    this.saloonLocation = '';
    this.saloonServices = '';
  }
}
