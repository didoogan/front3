import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService  {

  headers;
  currentUser;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) {
      this.headers.append("Authorization", `Token ${this.currentUser.token}`)
    }
  }

  get(url) {
    return this.http.get(url, {headers: this.headers});
  }

  post(url ,data) {
    return this.http.post(url, data, {headers: this.headers});
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  ngOnInit() {
  }

}
