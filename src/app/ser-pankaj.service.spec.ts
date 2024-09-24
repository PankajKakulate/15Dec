import { TestBed } from '@angular/core/testing';

import { SerPankajService } from './ser-pankaj.service';

describe('SerPankajService', () => {
  let service: SerPankajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerPankajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
