import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from'@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BindComponent } from './bind/bind.component';
import { RouteComponent } from './route/route.component';
import { ServiceComponent } from './service/service.component';
import { NavigateModule } from './navigate/navigate.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BindComponent,
    RouteComponent,
    ServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NavigateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
