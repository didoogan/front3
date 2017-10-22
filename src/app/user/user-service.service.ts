import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AuthService } from '../helper/auth-service';
import { ENDPOINTS, MAIN_PAGE } from '../helper/constants';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private apiUrl;

  constructor(
    private _http: Http,
    private _authHttp: AuthService,
    private _router: Router)
  {  }

  signUp(email: string, psw: string): any {
    return this._http.post
    (
      ENDPOINTS.registration,
      {email: email, password1: psw, password2: psw}
    )
      .map((response: Response) => {
        response = response.json();
        this._authHttp.setCurrentUser(response, email);
        // this._router.navigate([MAIN_PAGE]);
        return response;
      })
      .catch(this.handleError);
  }

  signIn(email: string, psw: string): any {
    debugger;
    return this._http.post(ENDPOINTS.login, {email: email, password: psw})
      .map((response: Response) => {
        debugger;
        response = response.json();
        this._authHttp.setCurrentUser(response, email);
        this._router.navigate([MAIN_PAGE]);
      })
      .catch(this.handleError);
  }

  getUserList() {
    return this._http.get(ENDPOINTS.userList)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getUserInfo() {
    return this._http.get(ENDPOINTS.userInfo);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
