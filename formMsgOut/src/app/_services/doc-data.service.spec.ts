import { TestBed } from '@angular/core/testing';

import { DocDataService } from './doc-data.service';

describe('DocDataService', () => {
  let service: DocDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
