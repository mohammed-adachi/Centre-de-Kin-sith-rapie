import { TestBed } from '@angular/core/testing';

import { ServiceCompletService } from './service-complet.service';

describe('ServiceCompletService', () => {
  let service: ServiceCompletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCompletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
