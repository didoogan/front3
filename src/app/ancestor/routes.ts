import {AuthGuard} from '../helper/auth-guard';
import { AncestorComponent } from './ancestor.component';
import { AncestorElementComponent } from './ancestor-element/ancestor-element.component';
import { AncestorDetailResolver } from '../helper/ancestor.resolver';

export const routes = [
  { path: '', component: AncestorComponent, children: [
    { path: ':id', component: AncestorElementComponent,
      canActivate: [AuthGuard], resolve: { ancestor: AncestorDetailResolver }
    }
  ]},
];
