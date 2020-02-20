import { Component, OnInit } from '@angular/core';
import { Logger } from '@tk-ng/shared/utils';

@Component({
  selector: 'tk-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private logger: Logger) {}

  title = 'tk-ng-demo';

  ngOnInit(): void {
    const now = new Date();
    this.logger.info(`Application tk-ng started at ${now.toLocaleString()}`);
  }
}
