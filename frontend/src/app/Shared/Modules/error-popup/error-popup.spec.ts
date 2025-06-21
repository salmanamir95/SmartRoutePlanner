import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPopupComponent } from './error-popup'; // Corrected name
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorPopupComponent', () => {
  let component: ErrorPopupComponent;
  let fixture: ComponentFixture<ErrorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorPopupComponent, RouterTestingModule] // Standalone component imported directly
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
