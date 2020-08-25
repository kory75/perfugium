import { TestBed } from '@angular/core/testing';

import { PerfugiumCoreService } from './perfugium-core.service';

describe('PerfugiumCoreService', () => {
  let service: PerfugiumCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfugiumCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
