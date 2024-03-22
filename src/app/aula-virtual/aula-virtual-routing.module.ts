import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CuvComponent } from './pages/cuv/cuv.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { DetailCourseComponent } from './pages/detail-course/detail-course.component';

const routes: Routes = [
  {
    path: '',
    component: CuvComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'perfil',
        component: ProfileComponent,
      },
      {
        path: 'cursos',
        component: CoursesComponent,
      },
      {
        path: 'curso/:id',
        component: DetailCourseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AulaVirtualRoutingModule {}
