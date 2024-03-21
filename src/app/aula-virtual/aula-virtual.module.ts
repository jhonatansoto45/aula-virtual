import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import { ProgressBarModule } from 'primeng/progressbar';

import { SharedModule } from '../shared/shared.module';

import { AulaVirtualRoutingModule } from './aula-virtual-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CuvComponent } from './pages/cuv/cuv.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardBannerComponent } from './components/card-banner/card-banner.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    CoursesComponent,
    CuvComponent,
    NavbarComponent,
    CardBannerComponent,
    CalendarComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    AulaVirtualRoutingModule,
    SharedModule,
    FullCalendarModule,
    ProgressBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AulaVirtualModule {}
