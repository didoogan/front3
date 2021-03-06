import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Config} from "../config";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  private apiUrl;

  constructor(private _http: Http) {
    this.apiUrl = Config.serverUrl;
  }

  authHttp(token: string, method: string) {

  }

  signUp(email: string, psw: string): any {
    return this._http.post
    (
      `${this.apiUrl}/rest-auth/registration/`,
      {email: email, password1: psw, password2: psw}
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
