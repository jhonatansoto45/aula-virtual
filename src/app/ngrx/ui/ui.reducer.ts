import { Action, createReducer, on } from '@ngrx/store';

import { search } from './ui.actions';

export interface StateUi {
  params: string;
}

export const initialState: StateUi = {
  params: '',
};

const _uiReducer = createReducer(
  initialState,
  on(search, (state, { params }) => ({ ...state, params }))
);

export function uiReducer(state: any, action: Action) {
  return _uiReducer(state, action);
}
