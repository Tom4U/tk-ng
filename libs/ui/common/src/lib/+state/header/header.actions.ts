import { createAction, props } from '@ngrx/store';

export const setAppTitle = createAction(
  '[Header] Set App Title',
  props<{ appTitle: string }>()
);
