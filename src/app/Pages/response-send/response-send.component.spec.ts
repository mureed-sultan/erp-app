import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSendComponent } from './response-send.component';

describe('ResponseSendComponent', () => {
  let component: ResponseSendComponent;
  let fixture: ComponentFixture<ResponseSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseSendComponent]
    });
    fixture = TestBed.createComponent(ResponseSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
