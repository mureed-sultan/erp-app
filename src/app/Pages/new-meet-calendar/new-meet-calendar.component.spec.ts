import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetCalendarComponent } from './new-meet-calendar.component';

describe('NewMeetCalendarComponent', () => {
  let component: NewMeetCalendarComponent;
  let fixture: ComponentFixture<NewMeetCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMeetCalendarComponent]
    });
    fixture = TestBed.createComponent(NewMeetCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
