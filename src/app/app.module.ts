import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, PreloadAllModules} from "@angular/router";
import {ROUTES} from "./app.routes";
import {UserModule} from "./user/user.module";
import {AuthHttpComponent} from "./auth-http/auth-http.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthHttpComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
