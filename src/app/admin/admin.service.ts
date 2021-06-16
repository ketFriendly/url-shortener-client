import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment.localhost';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AdminService {

  private _url = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAdminData() {
    return this.http.get(this._url + `api/url/admin`);
  }
}