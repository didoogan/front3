import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Config} from '../config';
import {Observable} from 'rxjs';
import {ENDPOINTS, MAIN_PAGE} from '../helper/constants';
import { HandleError } from '../helper/handlers';

@Injectable()
export class TreeService {

  constructor(
    private http: Http,
  ) { }

  getAncestor(id: number) {
    return this.http.get(`${ENDPOINTS.ancestor}/${id}/`)
      .map(ancestor => {
        debugger;
      })
      .catch(HandleError);
  }
}
