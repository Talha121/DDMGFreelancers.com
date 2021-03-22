/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoreyserviceService } from './categoreyservice.service';

describe('Service: Categoreyservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoreyserviceService]
    });
  });

  it('should ...', inject([CategoreyserviceService], (service: CategoreyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
