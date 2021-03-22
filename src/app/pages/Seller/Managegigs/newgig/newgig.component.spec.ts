/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewgigComponent } from './newgig.component';

describe('NewgigComponent', () => {
  let component: NewgigComponent;
  let fixture: ComponentFixture<NewgigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewgigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
