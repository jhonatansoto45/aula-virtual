import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

//* Prime Ng
import { CarouselModule } from 'primeng/carousel';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HomeComponent, MenuComponent],
  imports: [CommonModule, RouterModule, CarouselModule, ReactiveFormsModule],
  exports: [HomeComponent, MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
