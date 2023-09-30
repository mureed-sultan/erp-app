import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-invite',
  templateUrl: './pending-invite.component.html',
  styleUrls: ['./pending-invite.component.css']
})
export class PendingInviteComponent {
  logo: string | undefined;
  userLogin: string | undefined;
  userImage: string | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.logo = this.route.snapshot.data['logo'];
    this.userLogin = this.route.snapshot.data['userLogin'];
    this.userImage = this.route.snapshot.data['userImage'];
  }
  decline(){
    console.log("Decline")
  }
  accept(){
    this.router.navigate(['thank-you']);
    console.log(" asdasdsa")
  }
}
