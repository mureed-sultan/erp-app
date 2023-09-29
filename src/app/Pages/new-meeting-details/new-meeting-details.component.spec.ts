import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetingDetailsComponent } from './new-meeting-details.component';

describe('NewMeetingDetailsComponent', () => {
  let component: NewMeetingDetailsComponent;
  let fixture: ComponentFixture<NewMeetingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMeetingDetailsComponent]
    });
    fixture = TestBed.createComponent(NewMeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
