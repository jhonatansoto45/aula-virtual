import { ActionReducerMap } from '@ngrx/store';

import { uiReducer, StateUi } from './ngrx/ui/ui.reducer';

export interface AppState {
  ui: StateUi;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
};
