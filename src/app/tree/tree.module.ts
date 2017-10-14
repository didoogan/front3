import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeElementComponent } from './tree-element/tree-element.component';
import { TreeComponent } from './tree.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TreeComponent,
    TreeElementComponent
  ]
})
export class TreeModule { }
