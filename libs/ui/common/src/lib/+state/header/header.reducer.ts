import { Action, createReducer, on } from '@ngrx/store';

import * as HeaderActions from './header.actions';

export const HEADER_FEATURE_KEY = 'header';

export interface State {
  appTitle: string;
}

export interface HeaderPartialState {
  readonly [HEADER_FEATURE_KEY]: State;
}

export const initialState: State = {
  appTitle: ''
};

const headerReducer = createReducer(
  initialState,
  on(HeaderActions.setAppTitle, state => ({
    ...state,
    appTitle: state.appTitle
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return headerReducer(state, action);
}
