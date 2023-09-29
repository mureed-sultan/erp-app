import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pending-invite',
  templateUrl: './pending-invite.component.html',
  styleUrls: ['./pending-invite.component.css']
})
export class PendingInviteComponent {
  @Input() logo: string | undefined;
  @Input() userLogin: string | undefined;
  @Input() userImage: string | undefined;

}
