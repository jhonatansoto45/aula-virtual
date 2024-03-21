import { createAction, props } from '@ngrx/store';

export const search = createAction(
  '[Navbar Component] search',
  props<{ params: string }>()
);
