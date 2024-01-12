import { TestBed } from '@angular/core/testing';

import { ReusableModalService } from './reusable-modal.service';

describe('ReusableModalService', () => {
  let service: ReusableModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
