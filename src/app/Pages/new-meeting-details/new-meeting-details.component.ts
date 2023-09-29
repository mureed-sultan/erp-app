import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-meeting-details',
  templateUrl: './new-meeting-details.component.html',
  styleUrls: ['./new-meeting-details.component.css']
})
export class NewMeetingDetailsComponent {
  @Input() logo: string | undefined;
  @Input() userLogin: string | undefined;
  @Input() userImage: string | undefined;

}
