import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '@ngx-arc-pattern/shared';

@Component({
  selector: 'ngx-arc-pattern-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'aa-softcon-app';
  version = '';
  client = '';
  provider = '';

  constructor(private appConfigService: AppConfigService) {
  }

  ngOnInit(): void {
    this.title = this.appConfigService.getConfig().name;
    this.version = this.appConfigService.getConfig().version;
    this.client = this.appConfigService.getConfig().client;
    this.provider = this.appConfigService.getConfig().provider;
  }
}
