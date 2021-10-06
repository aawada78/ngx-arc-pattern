import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig : any;

  constructor(private http: HttpClient) { }

  loadAppConfig(path: string) {
    console.log('Path: ', path);
    return this.http.get(path)
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  getConfig() : any {
    return this.appConfig;
  }

}
