import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment.localhost';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UrlService {

  private _url = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  shortenUrl(longUrl: string) {
      console.log("in service")
    return this.http.post(this._url + `api/url/shorten`, { longUrl: longUrl });
  }

  redirectToUrl(code: string) {
    return this.http.get(this._url + `api/${code}`);
  }
}