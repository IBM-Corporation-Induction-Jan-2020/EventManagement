import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreImageInDbComponent } from './store-image-in-db.component';

describe('StoreImageInDbComponent', () => {
  let component: StoreImageInDbComponent;
  let fixture: ComponentFixture<StoreImageInDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreImageInDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreImageInDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
