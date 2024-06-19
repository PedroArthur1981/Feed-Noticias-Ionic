import { TestBed } from '@angular/core/testing';

import { ApijornalismoService } from './apijornalismo.service';

describe('ApijornalismoService', () => {
  let service: ApijornalismoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApijornalismoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

