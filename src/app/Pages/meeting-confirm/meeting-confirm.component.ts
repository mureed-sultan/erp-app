import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meeting-confirm',
  templateUrl: './meeting-confirm.component.html',
  styleUrls: ['./meeting-confirm.component.css']
})
export class MeetingConfirmComponent {
  @Input() logo: string | undefined;
  @Input() userLogin: string | undefined;
  @Input() userImage: string | undefined;

}
