/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GigserviceService } from './gigservice.service';

describe('Service: Gigservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GigserviceService]
    });
  });

  it('should ...', inject([GigserviceService], (service: GigserviceService) => {
    expect(service).toBeTruthy();
  }));
});
