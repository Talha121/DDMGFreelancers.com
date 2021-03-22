/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sellerintro2Component } from './Sellerintro2.component';

describe('Sellerintro2Component', () => {
  let component: Sellerintro2Component;
  let fixture: ComponentFixture<Sellerintro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sellerintro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sellerintro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
