import { TestBed } from '@angular/core/testing';

import { FlightDetailsResolverService } from './flight-details-resolver.service';

describe('FlightDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightDetailsResolverService = TestBed.get(FlightDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
