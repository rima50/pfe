import { TestBed } from '@angular/core/testing';

import { TokenwithroleService } from './tokenwithrole.service';

describe('TokenwithroleService', () => {
  let service: TokenwithroleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenwithroleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
