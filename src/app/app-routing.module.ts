import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './Pages/auth-page/auth-page.component';
import { NewMeetingDetailsComponent } from './Pages/new-meeting-details/new-meeting-details.component';

const user = {
  logo:"/assets/images/logo.png",
  userLogin:"Talha Ahmad",
  userImage:"/assets/images/userimg.png",  
}

const routes: Routes = [
  {path:"", component:AuthPageComponent, data: user },
  {path:"new-meeting-details", component:NewMeetingDetailsComponent, data: user}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
