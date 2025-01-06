import { TestBed } from '@angular/core/testing';

import { GlobalServiceExampleService } from './global-service-example.service';

describe('GlobalServiceExampleService', () => {
  let service: GlobalServiceExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalServiceExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
