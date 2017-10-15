import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {LOGIN_PAGE} from './constants';

@Injectable()
export class AuthService  {

  headers;
  currentUser;
  constructor(
      private _localStorage: LocalStorageService,
      private _router: Router
  ) {
    this.headers = new Headers();
  }

  setCurrentUser(resp, email) {
    this._localStorage.store(
      'currentUser',
      { token: resp.key, email: email }
    );
  }

  getToken() {
    const user = this._localStorage.retrieve('currentUser');
    if (user && user['token']) {
      return user['token'];
    }
    return false;
  }

  getCurrentUser() {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = this._localStorage.retrieve('currentUser');
    if (this.currentUser) {
      this.headers.append('Authorization', `Token ${this.currentUser.token}`);
    } else {
      console.log('!!!!!!!!! not current user');
    }
  };

  isLoggedIn() {
    this.getCurrentUser();
    return !!this.currentUser;
  }

  checkLoggedIn() {
    if (!this.isLoggedIn()) {
      this.getCurrentUser();
    }
  }

  logOut() {
    this._localStorage.clear();
    this._router.navigate([LOGIN_PAGE]);
  }
}
