import { TestBed } from '@angular/core/testing';

import { ApientretenimentoService } from './apientretenimento.service';

describe('ApientretenimentoService', () => {
  let service: ApientretenimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApientretenimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


