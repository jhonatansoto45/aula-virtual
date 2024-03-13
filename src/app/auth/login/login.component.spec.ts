import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change input in password or text,  readonly changeViewPassword', () => {
    expect(component.viewPassword).toEqual('password');
    component.changeViewPassword();
    expect(component.viewPassword).toEqual('text');
    component.changeViewPassword();
    expect(component.viewPassword).toEqual('password');
  });

  it('should back to route the home,  back(): void ', () => {
    const router = TestBed.inject(Router);
    const spyNavigate = spyOn(router, 'navigate');
    component.back();
    expect(spyNavigate).toHaveBeenCalledWith(['/']);
  });
});
