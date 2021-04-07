import { TestBed } from '@angular/core/testing';

import { ServicedashboarduserService } from './servicedashboarduser.service';

describe('ServicedashboarduserService', () => {
  let service: ServicedashboarduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedashboarduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
