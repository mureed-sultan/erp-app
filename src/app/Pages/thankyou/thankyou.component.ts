import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent {
  logo: string | undefined;
  userLogin: string | undefined;
  userImage: string | undefined;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.logo = this.route.snapshot.data['logo'];
    this.userLogin = this.route.snapshot.data['userLogin'];
    this.userImage = this.route.snapshot.data['userImage'];
  }

}
