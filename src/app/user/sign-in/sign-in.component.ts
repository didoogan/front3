import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = {email: "", password: ""};

  constructor() { }

  signIn() {
    console.log(`${this.user.email} and ${this.user.password}`);
  }

  ngOnInit() {
  }

}
