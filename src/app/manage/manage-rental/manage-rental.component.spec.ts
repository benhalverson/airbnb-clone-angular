import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRentalComponent } from './manage-rental.component';

describe('ManageRentalComponent', () => {
  let component: ManageRentalComponent;
  let fixture: ComponentFixture<ManageRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
