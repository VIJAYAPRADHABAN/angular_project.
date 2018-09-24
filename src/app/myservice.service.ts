import { Injectable } from '@angular/core';
import {Class}from './class';
import {mockList}from './mock';
import{observable}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() {
   }
   getDataBase():Class[]{
    return mockList;
}
}
