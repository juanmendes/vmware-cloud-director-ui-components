import { TestBed } from '@angular/core/testing';

import { DocLibService } from './doc-lib.service';

describe('DocLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocLibService = TestBed.get(DocLibService);
    expect(service).toBeTruthy();
  });
});