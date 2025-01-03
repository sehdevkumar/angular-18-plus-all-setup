/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FComponent } from './f.component';

describe('FComponent', () => {
  let component: FComponent;
  let fixture: ComponentFixture<FComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
