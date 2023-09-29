import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent {
  iconList = [
    { icon: 'person', title: 'My Profile' },
    { icon: 'notifications', title: 'Notification' },
    { icon: 'grid_view', title: 'Settings' },
    { icon: 'power_settings_new', title: 'Logout' },
  ];
  activeIndex: number = 0;

  toggleActive(index: number): void {
    this.activeIndex = this.activeIndex === index ? this.activeIndex : index;
  }
}
