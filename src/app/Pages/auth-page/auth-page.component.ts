import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent{
  logo: string | undefined;
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Add this property for error message

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log("Say hello", this.logo);
  }
  

  ngOnInit(): void {
    this.logo = this.route.snapshot.data['logo'];
    console.log(this.logo)
  }
  userAuth(): void {   
    const auth = getAuth(); 
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential: UserCredential) => {
      const user = userCredential.user;
      console.log('User is authorized:', user);
      this.router.navigate(['new-meet-calendar']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('User is not authorized:', errorCode, errorMessage);
      this.errorMessage = errorMessage; 
      this.email = ""
      this.password = ""
    });
  }
}
