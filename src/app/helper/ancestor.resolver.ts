import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ancestor } from '../helper/models/ancestor.model';
import { AncestorService } from '../helper/ancestor.service';


@Injectable()
export class AncestorDetailResolver implements Resolve<Ancestor> {

  constructor(
    private ancestorService: AncestorService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any  {
    let id: number;
    if (route.params && route.params['id']) {
      id = +route.params['id'];
    }

    if (id) {
      return this.ancestorService.getAncestor(id);
    } else {
      this.router.navigate(['/']);
    }
  }
}
