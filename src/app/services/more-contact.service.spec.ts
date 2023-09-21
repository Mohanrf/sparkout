import { TestBed } from '@angular/core/testing';

import { MoreContactService } from './more-contact.service';

describe('MoreContactService', () => {
  let service: MoreContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
