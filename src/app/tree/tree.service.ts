import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Config} from '../config';
import {Observable} from 'rxjs';
import {ENDPOINTS, MAIN_PAGE} from '../helper/constants';
import { HandleError } from '../helper/handlers';
import { AuthService } from '../helper/auth-service';
import { Ancestor } from '../helper/models/ancestor.model';

@Injectable()
export class TreeService {

  constructor(
    private http: Http,
    private authHTTP: AuthService
  ) { }

  getAncestor(id: number) {
    return this.authHTTP.get(`${ENDPOINTS.ancestor}/${id}/`)
      .map(ancestor => {
        return Ancestor.loadFromJSON(ancestor.json());
      })
      .catch(HandleError);
  }
}
