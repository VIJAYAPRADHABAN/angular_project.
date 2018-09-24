import { Component, OnInit } from '@angular/core';
import {MyserviceService}from '../myservice.service';
import { Class } from '../class';
// import {mockList}from '../mock';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  mockList:Class[];
  constructor(private vari :MyserviceService) { }
  ngOnInit() {
    this.getService();
  }
  getService(){
    this.mockList=this.vari.getDataBase();
  }
}

