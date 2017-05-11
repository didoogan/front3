import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";


export const ROUTES: Routes = [
  { path: '',      component: AppComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule'},

  // { path: '**',    component: NoContentComponent }
];``
