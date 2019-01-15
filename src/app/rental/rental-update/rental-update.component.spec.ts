import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalUpdateComponent } from './rental-update.component';

describe('RentalUpdateComponent', () => {
  let component: RentalUpdateComponent;
  let fixture: ComponentFixture<RentalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
