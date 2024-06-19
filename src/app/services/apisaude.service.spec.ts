import { TestBed } from '@angular/core/testing';

import { ApisaudeService } from './apisaude.service';

describe('ApisaudeService', () => {
  let service: ApisaudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisaudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
