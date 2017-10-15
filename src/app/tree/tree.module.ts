import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeElementComponent } from './tree-element/tree-element.component';
import { TreeComponent } from './tree.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { TreeService } from './tree.service';
import { AncestorDetailResolver } from './tree.resolver';
import { AuthService } from '../helper/auth-service';
import { TreeRelationComponent } from './tree-relation/tree-relation.component';
import { TreeDetailComponent } from './tree-detail/tree-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TreeComponent,
    TreeElementComponent,
    TreeRelationComponent,
    TreeDetailComponent
  ],
  providers: [
    TreeService,
    AncestorDetailResolver,
    AuthService
  ]
})
export class TreeModule { }
