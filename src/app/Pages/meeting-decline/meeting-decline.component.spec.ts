import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDeclineComponent } from './meeting-decline.component';

describe('MeetingDeclineComponent', () => {
  let component: MeetingDeclineComponent;
  let fixture: ComponentFixture<MeetingDeclineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingDeclineComponent]
    });
    fixture = TestBed.createComponent(MeetingDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
