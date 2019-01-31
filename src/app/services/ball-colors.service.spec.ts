import { TestBed } from '@angular/core/testing';

import { BallColorsService } from './ball-colors.service';

describe('BallColorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BallColorsService = TestBed.get(BallColorsService);
    expect(service).toBeTruthy();
  });
});
