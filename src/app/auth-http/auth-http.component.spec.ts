import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHttpComponent } from './auth-http.component';

describe('AuthHttpComponent', () => {
  let component: AuthHttpComponent;
  let fixture: ComponentFixture<AuthHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
