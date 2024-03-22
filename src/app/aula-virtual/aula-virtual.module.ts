import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//* Prime Ng
import { ProgressBarModule } from 'primeng/progressbar';

import { SharedModule } from '../shared/shared.module';

import { AulaVirtualRoutingModule } from './aula-virtual-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CuvComponent } from './pages/cuv/cuv.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { TextComponetsPipe } from './pipes/text-componets.pipe';

import { DetailCourseComponent } from './pages/detail-course/detail-course.component';
import { DynamicComponentsDirective } from './directives/dynamic-components.directive';
import { CursoComponent } from './pages/detail-course/tabs/curso/curso.component';
import { ParticipantesComponent } from './pages/detail-course/tabs/participantes/participantes.component';
import { CalificacionesComponent } from './pages/detail-course/tabs/calificaciones/calificaciones.component';
import { CompetenciasComponent } from './pages/detail-course/tabs/competencias/competencias.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    CoursesComponent,
    CuvComponent,
    NavbarComponent,
    CardComponent,
    SearchComponent,
    TextComponetsPipe,
    DetailCourseComponent,
    DynamicComponentsDirective,
    CursoComponent,
    ParticipantesComponent,
    CalificacionesComponent,
    CompetenciasComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    AulaVirtualRoutingModule,
    ProgressBarModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AulaVirtualModule {}
