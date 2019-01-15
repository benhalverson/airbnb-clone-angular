import { TestBed, async, inject } from '@angular/core/testing';

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
