import { TestBed } from '@angular/core/testing';

import { DashboardadminService } from './dashboardadmin.service';

describe('DashboardadminService', () => {
  let service: DashboardadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
