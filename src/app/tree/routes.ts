import {AuthGuard} from '../helper/auth-guard';
import { TreeComponent } from './tree.component';
import { TreeElementComponent } from './tree-element/tree-element.component';

export const routes = [
  { path: '', component: TreeComponent, children: [
    { path: ':id', component: TreeElementComponent,
      canActivate: [AuthGuard] }
  ]},
];
