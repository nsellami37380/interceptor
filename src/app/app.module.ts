import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInterceptor } from './core/log.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SecuredComponent } from './secured/secured.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecuredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
     multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

