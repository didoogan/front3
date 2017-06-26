import {Injectable} from "@angular/core";
import {
  CanActivate, Router, RouterStateSnapshot,
  ActivatedRoute, ActivatedRouteSnapshot
} from "@angular/router";
import {AuthService} from "./auth-service";
import {Observable} from "rxjs";
import {ENDPOINTS, MAIN_PAGE} from "./constants";


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private _authService: AuthService,
              private _router: Router) { }

   canActivate(route: ActivatedRouteSnapshot){

    const urls = ['signin', 'signup'];
    const userExist = this._authService.isLoggedIn();

    if (urls.indexOf(route.url[0].path) > -1) {
      if (userExist) {
        this._router.navigate([MAIN_PAGE]);
      } else {
        return true;
      }
    }
    if (!userExist) {
        this._router.navigate(['/user/signin']);
    }
    return true;
  }
}