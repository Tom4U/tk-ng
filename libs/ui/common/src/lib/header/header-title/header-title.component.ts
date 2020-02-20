import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import * as HeaderActions from '../../+state/header/header.actions';
import { HeaderFacade } from '../../+state/header/header.facade';

@Component({
  selector: 'tk-ng-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.css']
})
export class HeaderTitleComponent implements OnInit {
  @Input() appTitle: string;

  constructor(private headerFacade: HeaderFacade) {}

  ngOnInit(): void {
    const appTitle = this.appTitle;
    this.headerFacade.dispatch(HeaderActions.setAppTitle({ appTitle }));

    this.headerFacade.appTitle$
      .pipe(tap(next => (this.appTitle = appTitle)))
      .subscribe();
  }
}
