import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private fireBaseAuth: FirebaseAuthentication) { }

  createUser(email, password) {
    let gg = this.fireBaseAuth.createUserWithEmailAndPassword(email, password);
    console.error(gg);
  }
}
