import { TestBed } from '@angular/core/testing';
import { ApifinancasService } from './apifinancas.service';

describe('ApifinancasService', () => {
  let service: ApifinancasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifinancasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
