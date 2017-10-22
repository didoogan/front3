import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';
import {AuthGuard} from '../helper/auth-guard';
import {ProfileComponent} from './profile/profile.component';
import { AncestorDetailResolver } from '../helper/ancestor.resolver';


export const routes = [
  { path: '', component: UserComponent, children: [
    { path: 'signup', component: SignUpComponent, canActivate: [AuthGuard]},
    { path: 'signin', component: SignInComponent, canActivate: [AuthGuard]},
    { path: 'list', component: UserListComponent, canActivate: [AuthGuard]},
    { path: 'profile', redirectTo: '/user/profile/create', pathMatch: 'full' },
    { path: 'profile/create', component: ProfileComponent, canActivate: [AuthGuard],
      data: {
        action: 'create'
      },
    },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard],
      resolve: { ancestor: AncestorDetailResolver },
      data: {
        action: 'update'
      },
    }
  ]},
];
