import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  @Input() logo: string | undefined;

  userAuth():void {
    
    
    // You can perform authentication here
console.log("Say hellow")
    // If authentication is successful, navigate to the new page
    // this.router.navigate(['/new-meeting-details']);
  }
}
