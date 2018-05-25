import { TestBed, inject } from '@angular/core/testing';

import { FooLibService } from './foo-lib.service';

describe('FooLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooLibService]
    });
  });

  it('should be created', inject([FooLibService], (service: FooLibService) => {
    expect(service).toBeTruthy();
  }));
});
