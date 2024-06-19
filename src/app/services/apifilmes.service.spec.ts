import { TestBed } from '@angular/core/testing';

import { ApifilmesService } from './apifilmes.service';

describe('ApifilmesService', () => {
  let service: ApifilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

