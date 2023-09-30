import { Component } from '@angular/core';
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
const app = initializeApp(environment.firebase);

const db = getFirestore(app);

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css'],
})
export class FirebaseComponent {
  constructor() {
    this.userAuth();
  }

  async userAuth(): Promise<void> {
    try {
      const docRef = await addDoc(collection(db, "/new-meeting"), {
        'guest-list': ['', ''],
        Agenda: 'Check Aganda 2',
        location: 'ISB',
        DateStart: '24/04/2025',
        DateEnd: '22/03/2025',
        context: 'Check Content 2',
        facilities: [''],
        meetwith: 'Test Meet two',
        Title: 'Check Second title',
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // const querySnapshot = await getDocs(collection(db, '/new-meeting'));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}}`);
    // });
  }
}
