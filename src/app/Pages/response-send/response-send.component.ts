import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response-send',
  templateUrl: './response-send.component.html',
  styleUrls: ['./response-send.component.css']
})
export class ResponseSendComponent {
  @Input() logo: string | undefined;
  @Input() userLogin: string | undefined;
  @Input() userImage: string | undefined;

}
