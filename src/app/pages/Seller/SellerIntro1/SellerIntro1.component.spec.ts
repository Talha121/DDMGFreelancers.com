/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerIntro1Component } from './SellerIntro1.component';

describe('SellerIntro1Component', () => {
  let component: SellerIntro1Component;
  let fixture: ComponentFixture<SellerIntro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerIntro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerIntro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
