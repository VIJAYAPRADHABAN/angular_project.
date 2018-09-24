import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { BindComponent } from '../bind/bind.component';
import { ServiceComponent } from '../service/service.component';
import {RouteComponent}from '../route/route.component';
import {HomeComponent}from '../home/home.component';
const navi: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'bind', component: BindComponent },
  { path: 'service', component: ServiceComponent },
  {path:'route',component:RouteComponent},
  {path:'home',component:HomeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(navi)],
  exports: [RouterModule],
  declarations: []
})
export class NavigateModule { }
