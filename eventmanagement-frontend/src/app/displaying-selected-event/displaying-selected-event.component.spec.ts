import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingSelectedEventComponent } from './displaying-selected-event.component';

describe('DisplayingSelectedEventComponent', () => {
  let component: DisplayingSelectedEventComponent;
  let fixture: ComponentFixture<DisplayingSelectedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingSelectedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingSelectedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
