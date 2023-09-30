import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';



@Component({
  selector: 'app-meeting-decline',
  templateUrl: './meeting-decline.component.html',
  styleUrls: ['./meeting-decline.component.css']
})
export class MeetingDeclineComponent {
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
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    headerToolbar: {
      start: 'prev',
      center: 'title',
      end: 'next',
    },
   
    contentHeight: 100,
    height:400,
    aspectRatio: 1,
    showNonCurrentDates: false, // Hide events from previous and future months
    fixedWeekCount: false,
    selectable: true,
    dateClick: function(info) {
      // alert('Clicked on: ' + info.dateStr);
      // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      // alert('Current view: ' + info.view.type);
      console.log(info)
      info.dayEl.style.backgroundColor = '#1294F2';
      info.dayEl.style.borderRadius = '50%';
    },
    titleFormat: { year: 'numeric', month: 'long' },
    views: {
      dayGrid: {
        titleFormat: { year: 'numeric', month: 'long' },
        dayHeaderFormat: { weekday: 'short' },
      },
    },
  };
  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  }
}
