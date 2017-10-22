import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {ENDPOINTS } from './constants';
import { HandleError } from './handlers';
import { Ancestor } from './models/ancestor.model';

@Injectable()
export class AncestorService {

  constructor(
    private http: Http
  ) { }

  createAncestor(ancestor: Ancestor, isOwner: boolean) {
      // ancestor.is_owner = isOwner;
      const ancestorData: any = Object.assign({}, ancestor);
      ancestorData.is_owner = false;
      return this.http.post(ENDPOINTS.ancestors, ancestor)
        .map((response: Response) => {
          return response.json();
        })
        .catch(HandleError);
  }

  getAncestor(id: number) {
    return this.http.get(`${ENDPOINTS.ancestors}${id}/`)
      .map(ancestor => {
        return Ancestor.loadFromJSON(ancestor.json());
      })
      .catch(HandleError);
  }

  getAncestors(ids?: number[]) {
      const search: URLSearchParams = new URLSearchParams();
      const requestOptions: RequestOptions = new RequestOptions();
    if (ids) {
        search.set('ids', ids.toString());
        requestOptions.search = search;
    }
    return this.http.get(ENDPOINTS.ancestors, requestOptions)
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
