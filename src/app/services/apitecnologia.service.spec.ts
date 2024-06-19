import { TestBed } from '@angular/core/testing';

import { ApitecnologiaService } from './apitecnologia.service';

describe('ApitecnologiaService', () => {
  let service: ApitecnologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitecnologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
