import { TestBed } from '@angular/core/testing';

import { ScApiService } from './sc-api.service';

describe('ScApiService', () => {
  let service: ScApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
