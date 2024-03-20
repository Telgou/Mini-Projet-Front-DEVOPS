import { TestBed } from '@angular/core/testing';

import { UpdatefoyerrService } from './updatefoyerr.service';

describe('UpdatefoyerrService', () => {
  let service: UpdatefoyerrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatefoyerrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
