import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { courses } from '../../ngrx/aula-virtual/aula-virtual.actions';
import { listCourses } from './data.default';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  viewPassword: 'password' | 'text' = 'password';

  regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  readonly changeViewPassword = () =>
    (this.viewPassword =
      this.viewPassword === 'password' ? 'text' : 'password');

  valideForm = (field: string): boolean =>
    this.form.controls[field].errors && this.form.controls[field].touched
      ? true
      : false;

  navigateTo(route: string): void {
    //! remover, solo para simular data
    if (route === '/cuv/dashboard')
      this.store.dispatch(courses({ coursesData: listCourses }));

    this.router.navigate([route]);
  }

  savedForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('validado');
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.regexEmail),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
}
