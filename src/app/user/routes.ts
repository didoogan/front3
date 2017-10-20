import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';
import {AuthGuard} from '../helper/auth-guard';
import {ProfileComponent} from './profile/profile.component';


export const routes = [
  { path: '', component: UserComponent, children: [
    { path: 'signup', component: SignUpComponent,
      canActivate: [AuthGuard]},
    { path: 'signin', component: SignInComponent,
      canActivate: [AuthGuard]},
    { path: 'list', component: UserListComponent,
      canActivate: [AuthGuard]},
    { path: 'profile/', component: ProfileComponent,
      canActivate: [AuthGuard]}
  ]},
];
