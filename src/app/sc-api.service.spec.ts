import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { ScApiService } from './sc-api.service';

describe('ScApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ScApiService],
    })
  );

  it('should be created', () => {
    const service: ScApiService = TestBed.get(ScApiService);
    expect(service).toBeTruthy();
  });
});
