import { Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { UserService } from '../user/user-service.service';
import { AuthService } from './auth-service';

@Injectable()
export class TokenHttp extends Http {

  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions,
              private authService: AuthService) {
    super(_backend, _defaultOptions);
  }

  public request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    const token = this.authService.getToken();
    if (token) {
      if (options) {
        options.headers.set('Authorization', 'Token ' + token);
      } else {
        (<Request> url).headers.set('Authorization', 'Token ' + token);
      }
    }
    return super.request(url, options);
  }
}
