import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

//* Prime Ng
import { CarouselModule } from 'primeng/carousel';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [HomeComponent, MenuComponent, AsideComponent],
  imports: [CommonModule, RouterModule, CarouselModule, ReactiveFormsModule],
  exports: [HomeComponent, MenuComponent, AsideComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
