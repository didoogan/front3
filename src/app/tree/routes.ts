import {AuthGuard} from '../helper/auth-guard';
import { TreeComponent } from './tree.component';
import { TreeElementComponent } from './tree-element/tree-element.component';
import { AncestorDetailResolver } from './tree.resolver';

export const routes = [
  { path: '', component: TreeComponent, children: [
    { path: ':id', component: TreeElementComponent,
      canActivate: [AuthGuard], resolve: { ancestor: AncestorDetailResolver }
    }
  ]},
];
