import { Component } from '@angular/core';
import {UserService} from "./user/user-service.service";
import {Router} from "@angular/router";
import {AuthService} from "./helper/auth-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(
      private _userService: UserService,
      private _router: Router,
      private _authService: AuthService
  ) {}

  logOut() {
    this._authService.logOut();
  }
}
