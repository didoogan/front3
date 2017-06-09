import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = {email: "", password: ""};

  constructor(private _userService: UserService) { }

  signIn() {
    this._userService.signIn(this.user.email, this.user.password)
        .subscribe(
      response => {
        console.log(response);
        localStorage.setItem(
            'currentUser',
            JSON.stringify({ token: response.key, email: this.user.email })
        );
      },
      error => console.log(error)
    )
  }

  ngOnInit() {
  }

}
