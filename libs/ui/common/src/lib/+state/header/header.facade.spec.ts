import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as HeaderActions from './header.actions';
import { HeaderFacade } from './header.facade';
import { HEADER_FEATURE_KEY, reducer, State } from './header.reducer';

interface TestSchema {
  header: State;
}

describe('HeaderFacade', () => {
  let facade: HeaderFacade;
  let store: Store<TestSchema>;
  const createHeaderEntity = (appTitle: string) => appTitle;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(HEADER_FEATURE_KEY, reducer)],
        providers: [HeaderFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(HeaderFacade);
    });

    it('setAppTitle() should return app title', async done => {
      try {
        let appTitle = await readFirst(facade.appTitle$);

        expect(appTitle.length).toBe(0);

        facade.dispatch(
          HeaderActions.setAppTitle({ appTitle: createHeaderEntity('title') })
        );

        appTitle = await readFirst(facade.appTitle$);

        expect(appTitle.length).toBe('title'.length);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
