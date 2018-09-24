import { Component, OnInit } from '@angular/core';
import {mockList}from '../mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = "LIST OF BIKES";
  public varrr=mockList;
  constructor() { }

  ngOnInit() {
  }

}
