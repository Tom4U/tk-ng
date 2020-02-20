import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeaderFacade } from './+state/header/header.facade';
import * as fromHeader from './+state/header/header.reducer';
import { HeaderTitleComponent } from './header/header-title/header-title.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromHeader.HEADER_FEATURE_KEY, fromHeader.reducer),
    EffectsModule.forFeature([])
  ],
  declarations: [HeaderTitleComponent],
  providers: [HeaderFacade]
})
export class UiCommonModule {}
