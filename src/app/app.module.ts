import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './Pages/auth-page/auth-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NewMeetingDetailsComponent } from './Pages/new-meeting-details/new-meeting-details.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
import { MatIconModule } from '@angular/material/icon';
import { MeetingDetailComponent } from './Components/meeting-detail/meeting-detail.component';
import { FormsModule } from '@angular/forms';
import { TagifyModule } from 'ngx-tagify';
import * as Tagify from '@yaireo/tagify';
import { TagData, TagifySettings } from '@yaireo/tagify';
import { ThankyouComponent } from './Pages/thankyou/thankyou.component';
import { PendingInviteComponent } from './Pages/pending-invite/pending-invite.component';
import { VisitorDetailsComponent } from './Pages/visitor-details/visitor-details.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ResponseSendComponent } from './Pages/response-send/response-send.component';
import { MeetingConfirmComponent } from './Pages/meeting-confirm/meeting-confirm.component';
import { FirebaseComponent } from './Components/firebase/firebase.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NewMeetCalendarComponent } from './Pages/new-meet-calendar/new-meet-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    HeaderComponent,
    FooterComponent,
    NewMeetingDetailsComponent,
    MyprofileComponent,
    MeetingDetailComponent,
    ThankyouComponent,
    PendingInviteComponent,
    VisitorDetailsComponent,
    ResponseSendComponent,
    MeetingConfirmComponent,
    FirebaseComponent,
    NewMeetCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    TagifyModule.forRoot(),
    MatSlideToggleModule,
    provideFirebaseApp(() => initializeApp(
      {  apiKey: "AIzaSyBRTRiI6t4cCuVGsdLhwixGswLGq24HmjE",
      authDomain: "erp-app-78e00.firebaseapp.com",
      projectId: "erp-app-78e00",
      storageBucket: "erp-app-78e00.appspot.com",
      messagingSenderId: "1096834700857",
      appId: "1:1096834700857:web:c51c72316f4b7156529fe8",
      measurementId: "G-X4N0591RNL" }
      )),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    FullCalendarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
