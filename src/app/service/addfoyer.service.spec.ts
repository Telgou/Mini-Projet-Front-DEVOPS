import { TestBed } from '@angular/core/testing';

import { AddfoyerService } from './addfoyer.service';

describe('AddfoyerService', () => {
  let service: AddfoyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfoyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
