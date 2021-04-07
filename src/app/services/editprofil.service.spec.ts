import { TestBed } from '@angular/core/testing';

import { EditprofilService } from './editprofil.service';

describe('EditprofilService', () => {
  let service: EditprofilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditprofilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
