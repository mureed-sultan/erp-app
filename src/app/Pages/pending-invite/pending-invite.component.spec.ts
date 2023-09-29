import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInviteComponent } from './pending-invite.component';

describe('PendingInviteComponent', () => {
  let component: PendingInviteComponent;
  let fixture: ComponentFixture<PendingInviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingInviteComponent]
    });
    fixture = TestBed.createComponent(PendingInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
