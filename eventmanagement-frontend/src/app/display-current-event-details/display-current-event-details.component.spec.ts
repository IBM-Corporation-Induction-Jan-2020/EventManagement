import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurrentEventDetailsComponent } from './display-current-event-details.component';

describe('DisplayCurrentEventDetailsComponent', () => {
  let component: DisplayCurrentEventDetailsComponent;
  let fixture: ComponentFixture<DisplayCurrentEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCurrentEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCurrentEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
