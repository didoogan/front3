import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service.service";
import {Router} from "@angular/router";
import {ENDPOINTS, MAIN_PAGE} from "../../helper/constants";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = {email: "", password1: "", password2: ""};

  constructor(
      private _userService: UserService,
      private _router: Router,
      private _localStorage: LocalStorageService
  ) { }

  signUp() {
    if(this.user.password1 !== this.user.password2) {
      console.log('Password1 should be equal password2.');
      return;
    }
    this._userService.signUp(this.user.email, this.user.password1).subscribe(
      response => {
      },
      error => console.log(error)
    )}

  ngOnInit() {
  }

}
