import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  password: string = "";
  email: string = "";

  constructor() { }

  signUp() {
    console.log(`${this.password} and ${this.email}`);
  }

  ngOnInit() {
  }

}
