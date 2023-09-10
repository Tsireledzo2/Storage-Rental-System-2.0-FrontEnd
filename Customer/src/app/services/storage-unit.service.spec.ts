import { TestBed } from '@angular/core/testing';

import { StorageUnitService } from './storage-unit.service';

describe('StorageUnitService', () => {
  let service: StorageUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
