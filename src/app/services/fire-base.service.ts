import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private fireBaseAuth: AngularFireAuth) { }

  createUser(email, password) {
    this.fireBaseAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
      console.error(res);
    }).catch((res) => {
      console.error(res);
    });
  }

  loginUser(username, password) {
    this.fireBaseAuth.auth.signInWithEmailAndPassword(username, password).then((res) => {
      console.error(res);
    }).catch((res) => {
      console.error(res);
    });
  }
}
