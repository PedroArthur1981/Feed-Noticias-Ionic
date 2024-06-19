import { TestBed } from '@angular/core/testing';

import { ApiesporteService } from './apiesporte.service';

describe('ApiesporteService', () => {
  let service: ApiesporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiesporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
