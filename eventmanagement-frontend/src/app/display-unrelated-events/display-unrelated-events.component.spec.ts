import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUnrelatedEventsComponent } from './display-unrelated-events.component';

describe('DisplayUnrelatedEventsComponent', () => {
  let component: DisplayUnrelatedEventsComponent;
  let fixture: ComponentFixture<DisplayUnrelatedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUnrelatedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUnrelatedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
