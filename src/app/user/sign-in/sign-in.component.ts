import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../../helper/auth-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})
export class SignInComponent {
  user = {email: '', password: ''};

  constructor(private _userService: UserService,
              private _router: Router,
              private _localStorage: LocalStorageService,
              private _authService: AuthService) {
  }

  signIn() {
    debugger;
    this._userService.signIn(this.user.email, this.user.password)
      .subscribe(
        response => {
          debugger;
        },
        error => console.log(error)
      );
  }
}
