import { createAction, props } from '@ngrx/store';
import { CardCourseI } from 'src/app/interfaces/aula-virtual.interfaces';

export const courses = createAction(
  '[Courses Component] courses',
  props<{ coursesData: CardCourseI[] }>()
);

export const filterCourse = createAction(
  '[Dashboard Component] filterCourse',
  props<{ value: string }>()
);

export const resetFilter = createAction('[Dashboard Component] resetFilter');
