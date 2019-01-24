import { TestBed, async, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RentalGuard } from './rental.guard';

describe('RentalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentalGuard]
    });
  });

  it('should ...', inject([RentalGuard], (guard: RentalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
