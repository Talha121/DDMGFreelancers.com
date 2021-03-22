/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MygigsComponent } from './mygigs.component';

describe('MygigsComponent', () => {
  let component: MygigsComponent;
  let fixture: ComponentFixture<MygigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
