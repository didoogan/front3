import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service.service";
import {Router} from "@angular/router";
import {CONSTANTS} from "../../helper/constants";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = {email: "", password1: "", password2: ""};

  constructor(
      private _userService: UserService,
      private _router: Router
  ) { }

  signUp() {
    if(this.user.password1 !== this.user.password2) {
      console.log('Password1 should be equal password2.');
      return;
    }
    this._userService.signUp(this.user.email, this.user.password1).subscribe(
      response => {
        localStorage.setItem(
            'currentUser',
            JSON.stringify({ token: response.key, email: this.user.email })
        );
        window.location.reload();
        this._router.navigate([CONSTANTS.mainPage]);
      },
      error => console.log(error)
    )}

  ngOnInit() {
  }

}
