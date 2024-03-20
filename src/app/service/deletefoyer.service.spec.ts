import { TestBed } from '@angular/core/testing';

import { DeletefoyerService } from './deletefoyer.service';

describe('DeletefoyerService', () => {
  let service: DeletefoyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletefoyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
