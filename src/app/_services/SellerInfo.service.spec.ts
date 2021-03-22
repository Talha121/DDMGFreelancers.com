/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellerInfoService } from './SellerInfo.service';

describe('Service: SellerInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerInfoService]
    });
  });

  it('should ...', inject([SellerInfoService], (service: SellerInfoService) => {
    expect(service).toBeTruthy();
  }));
});
