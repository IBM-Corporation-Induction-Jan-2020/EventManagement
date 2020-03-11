import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUpcomingEventDetailsComponent } from './display-upcoming-event-details.component';

describe('DisplayUpcomingEventDetailsComponent', () => {
  let component: DisplayUpcomingEventDetailsComponent;
  let fixture: ComponentFixture<DisplayUpcomingEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUpcomingEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUpcomingEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
