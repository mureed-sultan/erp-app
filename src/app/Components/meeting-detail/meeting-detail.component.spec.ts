import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDetailComponent } from './meeting-detail.component';

describe('MeetingDetailComponent', () => {
  let component: MeetingDetailComponent;
  let fixture: ComponentFixture<MeetingDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingDetailComponent]
    });
    fixture = TestBed.createComponent(MeetingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
