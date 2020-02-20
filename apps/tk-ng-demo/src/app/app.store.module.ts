import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataPersistence } from '@nrwl/angular';
import { ngrxLogger } from '@tk-ng/shared/utils';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        initialState: {
          router: {
            state: { url: '/', params: {} },
            navigationId: -1
          }
        },
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        },
        metaReducers: !environment.production ? [ngrxLogger] : []
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'tk-ng-demo'
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule,
    StoreRouterConnectingModule
  ],
  providers: [DataPersistence]
})
export class AppStoreModule {}
