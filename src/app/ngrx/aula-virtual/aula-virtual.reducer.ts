import { Action, createReducer, on } from '@ngrx/store';
import { CardCourseI } from '../../interfaces/aula-virtual.interfaces';
import { courses, filterCourse, resetFilter } from './aula-virtual.actions';

export interface StateCuv {
  filterCourses: CardCourseI[];
  originalCourses: CardCourseI[];
}

export const initialState: StateCuv = {
  filterCourses: [],
  originalCourses: [],
};

const _aulaVirtualReducer = createReducer(
  initialState,
  on(courses, (state, { coursesData }) => ({
    ...state,
    originalCourses: coursesData,
    filtercourses: coursesData,
  })),
  on(filterCourse, (state, { value }) => ({
    ...state,
    filterCourses: state.originalCourses.filter((course) =>
      course.title.toLowerCase().trim().includes(value.toLowerCase().trim())
    ),
  })),
  on(resetFilter, (state) => ({
    ...state,
    filterCourses: state.originalCourses,
  }))
);

export function aulaVirtualReducer(state: any, action: Action) {
  return _aulaVirtualReducer(state, action);
}
