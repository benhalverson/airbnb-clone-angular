import { TestBed } from '@angular/core/testing';

import { RentalService } from './rental.service';

describe('RentalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentalService = TestBed.get(RentalService);
    expect(service).toBeTruthy();
  });
});
