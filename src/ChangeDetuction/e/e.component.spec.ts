/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EComponent } from './e.component';

describe('EComponent', () => {
  let component: EComponent;
  let fixture: ComponentFixture<EComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
