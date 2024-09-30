import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Login } from './model/login';
import { LoginStatus } from './model/login-status';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<LoginStatus>  {
    let url = 'http://localhost:8585/BidderLogin';
    return this.http.post<LoginStatus>(url, login);
  }
}
