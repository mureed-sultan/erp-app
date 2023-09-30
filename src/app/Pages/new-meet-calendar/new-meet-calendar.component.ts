import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-meet-calendar',
  templateUrl: './new-meet-calendar.component.html',
  styleUrls: ['./new-meet-calendar.component.css'],
})
export class NewMeetCalendarComponent {
  logo: string | undefined;
  userLogin: string | undefined;
  userImage: string | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.logo);
  }


  ngOnInit(): void {
    this.logo = this.route.snapshot.data['logo'];
    this.userLogin = this.route.snapshot.data['userLogin'];
    this.userImage = this.route.snapshot.data['userImage'];
  }
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      {
        title: 'Meeting 1aask dhiauhfkis jdhfishwakljfhsoaidh bflksahfoisduh',
        start: '2023-10-02T10:00:00',
        end: '2023-10-02T12:00:00',
      },
      {
        title: 'Meeting 2',
        start: '2023-10-05T14:00:00',
        end: '2023-10-05T16:00:00',
      },
    ],
    eventClick: (info) => {
      console.log('Event clicked:', info.event.title);
    },
    eventContent: function (arg) {
      return { html: `<div class="fc-event-title">${arg.event.title}</div>` };
    },
    headerToolbar: {
      start: '', // will normally be on the left. if RTL, will be on the right
      center: 'prev title next',
      end: 'myCustomButton',
    },
    customButtons: {
      myCustomButton: {
        text: 'New Meeting',
        click: () => {
          this.router.navigate(['new-meeting-details']);
        },
      },
    },

    titleFormat: { year: 'numeric', month: 'long' },
    views: {
      dayGrid: {
        titleFormat: { year: 'numeric', month: 'long' },
        dayHeaderFormat: { weekday: 'long' },
      },
    },
  };
}
