import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user-service.service';
import { UserListComponent } from './user-list/user-list.component';
import {AuthService} from '../helper/auth-service';
import { ProfileComponent } from './profile/profile.component';
import {FieldValidatorComponent} from "../helper/components/field-validator/field-validator.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    UserComponent,
    UserListComponent,
    ProfileComponent,
    FieldValidatorComponent
  ],
  providers: [UserService, AuthService]
})
export class UserModule { }
