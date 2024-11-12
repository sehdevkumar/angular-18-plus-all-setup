/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GComponent } from './g.component';

describe('GComponent', () => {
  let component: GComponent;
  let fixture: ComponentFixture<GComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
