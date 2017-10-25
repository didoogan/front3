import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { AuthService } from './helper/auth-service';
import { AuthGuard } from './helper/auth-guard';
import { Ng2Webstorage } from 'ngx-webstorage';
import { TokenHttp } from './helper/auth-token.service';
import { AncestorModule } from './ancestor/ancestor.module';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Ng2CarouselamosModule} from "ng2-carouselamos";
import { CarouselComponent } from './helper/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    AncestorModule,
    Ng2Webstorage,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
      {
        provide: Http,
        useClass: TokenHttp,
        deps: [XHRBackend, RequestOptions, AuthService]
      },
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
