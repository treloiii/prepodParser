import { TestBed } from '@angular/core/testing';

import { ParsingServiceService } from './parsing-service.service';

describe('ParsingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParsingServiceService = TestBed.get(ParsingServiceService);
    expect(service).toBeTruthy();
  });
});
