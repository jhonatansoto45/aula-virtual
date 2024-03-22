import { ActionReducerMap } from '@ngrx/store';

import { uiReducer, StateUi } from './ngrx/ui/ui.reducer';
import {
  StateCuv,
  aulaVirtualReducer,
} from './ngrx/aula-virtual/aula-virtual.reducer';

export interface AppState {
  ui: StateUi;
  cuv: StateCuv;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  cuv: aulaVirtualReducer,
};
