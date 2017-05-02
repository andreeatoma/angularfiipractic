import { TestBed, inject } from '@angular/core/testing';

import { WorkstoredataService } from './workstoredata.service';

describe('WorkstoredataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkstoredataService]
    });
  });

  it('should ...', inject([WorkstoredataService], (service: WorkstoredataService) => {
    expect(service).toBeTruthy();
  }));
});
