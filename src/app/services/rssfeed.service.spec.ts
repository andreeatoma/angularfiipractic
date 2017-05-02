import { TestBed, inject } from '@angular/core/testing';

import { RssfeedService } from './rssfeed.service';

describe('RssfeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RssfeedService]
    });
  });

  it('should ...', inject([RssfeedService], (service: RssfeedService) => {
    expect(service).toBeTruthy();
  }));
});
