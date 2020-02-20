import { text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { Subject } from 'rxjs';

import { HeaderFacade } from '../../+state/header/header.facade';
import { HeaderTitleComponent } from './header-title.component';

class HeaderFacadeMock {
  appTitle$ = new Subject<string>();

  dispatch(action: any) {
    if (action.appTitle) this.appTitle$.next(action.appTitle);
  }
}

export default {
  title: 'HeaderTitleComponent',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: HeaderFacade,
          useClass: HeaderFacadeMock
        }
      ]
    })
  ]
};

export const primary = () => ({
  component: HeaderTitleComponent,
  props: {
    appTitle: text('appTitle', 'APP TITLE')
  }
});
