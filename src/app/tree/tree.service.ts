import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import {Config} from '../config';
import {Observable} from 'rxjs';
import {ENDPOINTS, MAIN_PAGE} from '../helper/constants';
import { HandleError } from '../helper/handlers';
import { AuthService } from '../helper/auth-service';
import { Ancestor } from '../helper/models/ancestor.model';

@Injectable()
export class TreeService {

  constructor(
    private http: Http
  ) { }

  getAncestor(id: number) {
    return this.http.get(`${ENDPOINTS.ancestor}/${id}/`)
      .map(ancestor => {
        return Ancestor.loadFromJSON(ancestor.json());
      })
      .catch(HandleError);
  }

  getAncestors(ids: number[]) {
    const search: URLSearchParams = new URLSearchParams();
    search.set('ids', ids.toString());
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.search = search;
    return this.http.get(`${ENDPOINTS.ancestor}/`, requestOptions)
      .map(ancestorsData => {
        const ancestorsJSON: any[] = ancestorsData.json();
        const ancestors: Ancestor[] = [];
        ancestorsJSON.forEach(ancestor => {
          ancestors.push(Ancestor.loadFromJSON(ancestor));
        });
        return ancestors;
      })
      .catch(HandleError);
  }
}
