import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service.service";
import {Router} from "@angular/router";
import {MAIN_PAGE} from "../../helper/constants";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    mainPage;

  constructor(
      private _userService: UserService,
      private _router: Router,
      private _localStorage: LocalStorageService
  ) {
    this.mainPage = MAIN_PAGE;
  }


    signIn() {
        this._userService.signIn(this.user.email, this.user.password)
        .subscribe(
            response => {
                // this._localStorage.store(
                localStorage.setItem(
                    'currentUser',
                    JSON.stringify({ token: response.key, email: this.user.email })
                );
                window.location.reload();
                // this._router.navigate([this.mainPage]);
            },
            error => console.log(error)
        )
    }

  user = {email: "", password: ""};


  ngOnInit() {
  }

}
