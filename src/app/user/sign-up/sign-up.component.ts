import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = {email: "", password1: "", password2: ""};

  constructor() { }

  signUp() {
    console.log(`${this.user.password1} and ${this.user.email}`);
  }

  ngOnInit() {
  }

}
