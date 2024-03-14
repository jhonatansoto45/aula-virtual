import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {
  viewPassword: 'password' | 'text' = 'password';

  regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  form!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

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
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.regexEmail),
        ],
      ],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }
}
