import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TreeService } from './tree.service';
import { Ancestor } from '../helper/models/ancestor.model';


@Injectable()
export class AncestorDetailResolver implements Resolve<Ancestor> {

  constructor(
    private treeService: TreeService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any  {
    let id: number;
    if (route.params && route.params['id']) {
      id = +route.params['id'];
    }

    if (id) {
      this.treeService.getAncestor(id).subscribe(ancestor => {
        debugger;
        if (ancestor instanceof Ancestor) {
          return ancestor;
        } else {
          this.router.navigate(['/']);
        }
      }, error => {
        // TODO: add toast service to show that ancestor was not found
        this.router.navigate(['/']);
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
