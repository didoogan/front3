import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../../helper/models/user.model';
import { validationMessages } from '../../helper/validations-messages';
import { passwordConfirmValidator } from '../../helper/validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ancestor } from '../../helper/models/ancestor.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User = new User();
  public ancestor: Ancestor = new Ancestor;
  public validationMessages = validationMessages;
  public signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _localStorage: LocalStorageService) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', [Validators.required, passwordConfirmValidator('password1')]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      third_name: ['', []],
      gender: ['', Validators.required],
      birth: ['', Validators.required]
    });
  }

  signUp() {
    this.user.email = this.signupForm.get('email').value;
    this.user.password1 = this.signupForm.get('email').value;
    this.user.password2 = this.signupForm.get('email').value;
    this.ancestor.first_name = this.signupForm.get('first_name').value;
    this.ancestor.last_name = this.signupForm.get('last_name').value;
    this.ancestor.third_name = this.signupForm.get('third_name').value;
    this.ancestor.gender = this.signupForm.get('gender').value;
    this.ancestor.birth = this.signupForm.get('birth').value;

    this._userService.signUp(this.user.email, this.user.password1).subscribe(
      response => {
        debugger;
        this._userService.getUserInfo().subscribe(info => {
          debugger;

          // Todo: make request get user info with ID and make a request for creation of user
        });
      },
      error => console.log(error)
    );
  }
}
