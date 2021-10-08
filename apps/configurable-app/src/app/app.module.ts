import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppConfigService, SharedModule } from '@ngx-arc-pattern/shared';

import { AppComponent } from './app.component';


const myAppInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    console.log('App initialized …');
    // configuration can be locally placed in the assets or placed on a CDN
    let url =  '/assets/config/appConfig.json';
    return appConfig.loadAppConfig(url);
  };
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: myAppInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
