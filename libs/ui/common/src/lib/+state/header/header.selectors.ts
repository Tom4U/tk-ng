import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HEADER_FEATURE_KEY, HeaderPartialState, State } from './header.reducer';

// Lookup the 'Header' feature state managed by NgRx
export const getHeaderState = createFeatureSelector<HeaderPartialState, State>(
  HEADER_FEATURE_KEY
);

export const getAppTitle = createSelector(
  getHeaderState,
  (state: State) => state.appTitle
);
