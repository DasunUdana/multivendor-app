import { Component, OnInit } from '@angular/core';
import {FireBaseService} from '../services/fire-base.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  userName: '';
  password: '';

  constructor(private service: FireBaseService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.service.loginUser(this.userName, this.password).then(() => {
      this.presentToast('Login Success', false);
      this.router.navigate(['/homeuser']);
    }).catch(((err) => {
      this.presentToast(err, true);
    }));

    this.clearFields();
  }

  async presentToast(msg, isError) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      color: isError ? 'danger' : 'success'
    });
    toast.present();
  }

  clearFields() {
    this.userName = '';
    this.password = '';
  }

}
