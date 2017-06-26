import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Config} from "../config";
import {Observable} from "rxjs";
import {AuthService} from "../helper/auth-service";
import {ENDPOINTS} from "../helper/constants";

@Injectable()
export class UserService {
  private apiUrl;

  constructor(
      private _http: Http,
      private _authHttp: AuthService
  ) {
    this.apiUrl = Config.serverUrl;
  }

  signUp(email: string, psw: string): any {
    return this._http.post
    (
      ENDPOINTS.registration,
      {email: email, password1: psw, password2: psw}
    )
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  signIn(email: string, psw: string): any {
    return this._http.post
    (
      ENDPOINTS.login,
      {email: email, password: psw}
    )
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  getUserList() {
    return this._authHttp.get(
        ENDPOINTS.userList
    )
    .map((response: Response) => response.json())
    .do(data => console.log(data))
    .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
