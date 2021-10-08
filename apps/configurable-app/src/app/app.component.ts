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

  private appConfig : any = null;

  constructor(private appConfigService: AppConfigService) {}

  ngOnInit(): void {
    this.appConfig = this.appConfigService.getConfig();

    if (this.appConfig) {
      this.title = this.appConfig.name;
      this.version = this.appConfig.version;
      this.client = this.appConfig.client;
      this.provider = this.appConfig.provider;
    }
  }
}
