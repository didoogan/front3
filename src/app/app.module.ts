import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, PreloadAllModules} from "@angular/router";
import {ROUTES} from "./app.routes";
import {UserModule} from "./user/user.module";
import {AuthService} from "./helper/auth-service";
import {AuthGuard} from "./helper/auth-guard";
import {Ng2Webstorage} from "ngx-webstorage";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    Ng2Webstorage,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
