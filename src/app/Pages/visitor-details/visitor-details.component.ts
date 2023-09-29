import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visitor-details',
  templateUrl: './visitor-details.component.html',
  styleUrls: ['./visitor-details.component.css']
})
export class VisitorDetailsComponent {
  @Input() logo: string | undefined;
  @Input() userLogin: string | undefined;
  @Input() userImage: string | undefined;

}
