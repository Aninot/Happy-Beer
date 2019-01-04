import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerPage } from './add-beer.page';

describe('AddBeerPage', () => {
  let component: AddBeerPage;
  let fixture: ComponentFixture<AddBeerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
