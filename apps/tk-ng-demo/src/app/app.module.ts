import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ConsoleLogger, Logger } from '@tk-ng/shared/utils';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [
    {
      provide: Logger,
      useValue: new ConsoleLogger(environment.logLevel)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
