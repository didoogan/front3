import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user-service.service';
import { UserListComponent } from './user-list/user-list.component';
import { AuthService } from '../helper/auth-service';
import { ProfileComponent } from './profile/profile.component';
import { FieldValidatorComponent } from '../helper/components/field-validator/field-validator.component';
import { AncestorService } from '../helper/ancestor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from "../helper/components/carousel/carousel.component";
import {Ng2CarouselamosModule} from "ng2-carouselamos";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2CarouselamosModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    UserComponent,
    UserListComponent,
    ProfileComponent,
    FieldValidatorComponent,
    CarouselComponent
  ],
  providers: [UserService, AuthService, AncestorService]
})
export class UserModule { }
