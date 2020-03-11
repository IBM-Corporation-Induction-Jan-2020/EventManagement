import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDashboardComponent } from './bootstrap-dashboard.component';

describe('BootstrapDashboardComponent', () => {
  let component: BootstrapDashboardComponent;
  let fixture: ComponentFixture<BootstrapDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
