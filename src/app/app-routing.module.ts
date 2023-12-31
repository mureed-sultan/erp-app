import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './Pages/auth-page/auth-page.component';
import { NewMeetingDetailsComponent } from './Pages/new-meeting-details/new-meeting-details.component';
import { FirebaseComponent } from './Components/firebase/firebase.component';
import { ThankyouComponent } from './Pages/thankyou/thankyou.component';
import { NewMeetCalendarComponent } from './Pages/new-meet-calendar/new-meet-calendar.component';
import { PendingInviteComponent } from './Pages/pending-invite/pending-invite.component';
import { MeetingDeclineComponent } from './Pages/meeting-decline/meeting-decline.component';
import { MeetingConfirmComponent } from './Pages/meeting-confirm/meeting-confirm.component';
import { ResponseSendComponent } from './Pages/response-send/response-send.component';
import { VisitorDetailsComponent } from './Pages/visitor-details/visitor-details.component';



const user = {
  logo:"/assets/images/logo.png",
  userLogin:"Talha Ahmad",
  userImage:"/assets/images/userimg.png",  
}

const routes: Routes = [
  {path:"", component:AuthPageComponent, data: user },
  {path:"new-meeting-details", component:NewMeetingDetailsComponent, data: user},
  {path:"new-meet-calendar", component:NewMeetCalendarComponent, data: user},
  {path:"thank-you", component:ThankyouComponent, data: user},
  {path:"pending-invite", component:PendingInviteComponent, data: user},
  {path:"meeting-decline", component:MeetingDeclineComponent, data: user},
  {path:"meeting-confirm", component:MeetingConfirmComponent, data: user},
  {path:"response-sent", component:ResponseSendComponent, data: user},
  {path:"visitor-details", component:VisitorDetailsComponent, data: user},
  // {path:"test", component:FirebaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
