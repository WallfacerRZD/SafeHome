import { TestBed } from '@angular/core/testing';

import { RoleInfoService } from './role-info.service';

describe('RoleInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleInfoService = TestBed.get(RoleInfoService);
    expect(service).toBeTruthy();
  });
});
