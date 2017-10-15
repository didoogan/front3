import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldValidatorComponent } from './field-validator.component';

describe('FieldValidatorComponent', () => {
  let component: FieldValidatorComponent;
  let fixture: ComponentFixture<FieldValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
