import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCOmponent } from './login-component';

describe('LoginCOmponent', () => {
  let component: LoginCOmponent;
  let fixture: ComponentFixture<LoginCOmponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCOmponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCOmponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
