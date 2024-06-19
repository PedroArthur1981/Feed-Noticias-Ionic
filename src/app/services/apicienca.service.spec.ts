import { TestBed } from '@angular/core/testing';

import { ApiciencaService } from './apicienca.service';

describe('ApiciencaService', () => {
  let service: ApiciencaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiciencaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
