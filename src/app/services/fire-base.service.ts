import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FireBaseService {

  constructor(private fireBaseAuth: AngularFireAuth, private database: AngularFirestore) { }

  createUser(userObj) {
    return new Promise((resolve, reject) => {
      const email = userObj.customerEmail;
      const password = userObj.password;
      delete userObj.customerPassword;
      delete userObj.customerEmail;

      this.fireBaseAuth.auth.createUserWithEmailAndPassword(email, password).then((res: any) => {
        this.database.collection('user').doc(res.user.uid).set(userObj).then(() => {
          resolve();
        }).catch((err) => {
          reject(err.message);
        });
      }).catch((err) => {
        reject(err.message);
      });
    });
  }

  createSaloon(saloonObj) {
    return new Promise((resolve, reject) => {
      const email = saloonObj.customerEmail;
      const password = saloonObj.password;
      delete saloonObj.customerPassword;
      delete saloonObj.customerEmail;

      this.fireBaseAuth.auth.createUserWithEmailAndPassword(email, password).then((res: any) => {
        this.database.collection('saloon').doc(res.user.uid).set(saloonObj).then(() => {
          resolve();
        }).catch((err) => {
          reject(err.message);
        });
      }).catch((err) => {
        reject(err.message);
      });
    });
  }

  loginUser(username, password) {
    return new Promise((resolve, reject) => {
      this.fireBaseAuth.auth.signInWithEmailAndPassword(username, password).then((res) => {
        resolve();
      }).catch((err) => {
        reject(err.message);
      });
    });
  }
}
