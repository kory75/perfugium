import { TestBed } from '@angular/core/testing';

import { PerfugiumParanoiaService } from './perfugium-paranoia.service';

describe('PerfugiumParanoiaService', () => {
  let service: PerfugiumParanoiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfugiumParanoiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
