import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { ENDPOINTS } from './constants';
import { HandleError } from './handlers';
import { Ancestor } from './models/ancestor.model';

@Injectable()
export class AncestorService {

  constructor(private http: Http) {
  }

  createAncestor(ancestor: any, isOwner?: boolean) {
    const ancestorData: any = Object.assign({}, ancestor);

    if (isOwner)
      ancestorData.is_owner = true;

    return this.http.post(ENDPOINTS.ancestors, ancestorData)
      .map((response: Response) => {
        return Ancestor.loadFromJSON(response.json());
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

  updateAncestor(id: number, ancestor: any) {
    return this.http.put(`${ENDPOINTS.ancestors}${id}/`, ancestor)
      .map(ancestorResp => {
        return Ancestor.loadFromJSON(ancestorResp.json());
      })
      .catch(HandleError);
  }

  getAncestors(ids?: number[], withoutUser: boolean = false) {
    const search: URLSearchParams = new URLSearchParams();
    const requestOptions: RequestOptions = new RequestOptions();
    if (ids && ids.length > 0) {
      search.set('ids', ids.toString());
    }
    if (withoutUser) {
      search.set('without_user', withoutUser.toString());
    }
    if (ids && ids.length > 0 || withoutUser)
      requestOptions.params = search;
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
