import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {UserComponent} from "./user.component";


export const routes = [
  { path: '', component: UserComponent, children: [
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent },
  ]},
];
