import { TestBed } from '@angular/core/testing';

import { EnidesignsystemAngularService } from './enidesignsystem-angular.service';

describe('EnidesignsystemAngularService', () => {
  let service: EnidesignsystemAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnidesignsystemAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
