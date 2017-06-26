import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service.service";
import {Router} from "@angular/router";
import {ENDPOINTS, MAIN_PAGE} from "../../helper/constants";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = {email: "", password: ""};

  constructor(
      private _userService: UserService,
      private _router: Router
  ) { }

  signIn() {
    this._userService.signIn(this.user.email, this.user.password)
        .subscribe(
      response => {
        localStorage.setItem(
            'currentUser',
            JSON.stringify({ token: response.key, email: this.user.email })
        );
        window.location.reload();
        this._router.navigate([MAIN_PAGE]);
      },
      error => console.log(error)
    )
  }

  ngOnInit() {
  }

}
