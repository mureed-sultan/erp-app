import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './Pages/auth-page/auth-page.component';
import { NewMeetingDetailsComponent } from './Pages/new-meeting-details/new-meeting-details.component';

const routes: Routes = [
  {path:"", component:AuthPageComponent},
  {path:"new-meeting-details", component:NewMeetingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
