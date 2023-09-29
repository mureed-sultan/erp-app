import { Component, Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class FirebaseComponent {

  checkAuthorization(email: string, password: string) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        // User is authorized
        const user = userCredential.user;
        console.log('User is authorized:', user);
      })
      .catch((error) => {
        // User is not authorized
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('User is not authorized:', errorCode, errorMessage);
      });
  }
  constructor() {
 this.checkAuthorization("mureed@gmail.com","123abc")

  }

}