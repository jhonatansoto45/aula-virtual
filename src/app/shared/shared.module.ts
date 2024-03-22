import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

//* Prime Ng
import { CarouselModule } from 'primeng/carousel';
import { FullCalendarModule } from '@fullcalendar/angular';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AsideComponent } from './aside/aside.component';
import { CardBannerComponent } from './card-banner/card-banner.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AsideComponent,
    CardBannerComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    FullCalendarModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    AsideComponent,
    CardBannerComponent,
    CalendarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
