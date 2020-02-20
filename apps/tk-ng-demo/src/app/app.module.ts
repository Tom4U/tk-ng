import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConsoleLogger, Logger } from '@tk-ng/shared/utils';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppStoreModule } from './app.store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppStoreModule],
  providers: [
    {
      provide: Logger,
      useValue: new ConsoleLogger(environment.logLevel)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
