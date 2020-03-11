import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCompletedEventDetailsComponent } from './display-completed-event-details.component';

describe('DisplayCompletedEventDetailsComponent', () => {
  let component: DisplayCompletedEventDetailsComponent;
  let fixture: ComponentFixture<DisplayCompletedEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCompletedEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCompletedEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
