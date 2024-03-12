import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { RegistryComponent } from './registry/registry.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    RegistryComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
