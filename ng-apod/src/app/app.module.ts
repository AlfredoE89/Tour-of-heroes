import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';
import { SafePipeModule } from 'safe-pipe';
import { NgApodConfig } from '../../config/ng-apod.config';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SafePipeModule
  ],
  providers: [
    NgApodConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }