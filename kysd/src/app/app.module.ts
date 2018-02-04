import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import {RouterModule} from '@angular/router';
import {ApiserviceService} from './api/apiservice.service';
import { CheckService } from './base/check.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ZycommonModule } from './zycommon/zycommon.module';
import {SkipResolve} from './guard/skip.resolve';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ZycommonModule,
    FormsModule,
    RouterModule.forRoot(routing, {useHash: true})
  ],
  providers: [
    ApiserviceService,
    CheckService,
    SkipResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
