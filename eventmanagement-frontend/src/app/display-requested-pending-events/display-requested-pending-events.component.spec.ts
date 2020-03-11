import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRequestedPendingEventsComponent } from './display-requested-pending-events.component';

describe('DisplayRequestedPendingEventsComponent', () => {
  let component: DisplayRequestedPendingEventsComponent;
  let fixture: ComponentFixture<DisplayRequestedPendingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRequestedPendingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRequestedPendingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
