import { Component, OnInit } from '@angular/core';
import{Class}from '../class';
import{mockList}from '../mock';
@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  title = "!!..REVIEWS.!!";
  public varrr=mockList;
  public select:Class;
  // varrr: Class[] = [{ id: 1, name: 'vjai' },
  // { id: 2, name: 'ajai' },
  // { id: 3, name: 'jai' },
  // ]
  constructor() { }

  ngOnInit() {
  }
  onSelect(a: Class) {
    this.select = a;
  }
}
