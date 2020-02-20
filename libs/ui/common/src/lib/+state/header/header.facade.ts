import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import * as fromHeader from './header.reducer';
import * as HeaderSelectors from './header.selectors';

@Injectable()
export class HeaderFacade {
  appTitle$ = this.store.pipe(select(HeaderSelectors.getAppTitle));

  constructor(private store: Store<fromHeader.HeaderPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
