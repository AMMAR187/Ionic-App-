import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalonPage } from './add-salon.page';

describe('AddSalonPage', () => {
  let component: AddSalonPage;
  let fixture: ComponentFixture<AddSalonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
