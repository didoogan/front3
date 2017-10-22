import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AuthService } from '../helper/auth-service';
import { AncestorService } from '../helper/ancestor.service';
import { AncestorComponent } from './ancestor.component';
import { AncestorDetailComponent } from './ancestor-detail/ancestor-detail.component';
import { AncestorRelationComponent } from './ancestor-relation/ancestor-relation.component';
import { AncestorElementComponent } from './ancestor-element/ancestor-element.component';
import { AncestorDetailResolver } from '../helper/ancestor.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AncestorComponent,
    AncestorElementComponent,
    AncestorRelationComponent,
    AncestorDetailComponent
  ],
  providers: [
    AncestorService,
    AncestorDetailResolver,
    AuthService
  ]
})
export class AncestorModule { }
