import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  template: `<h1>hello {{name}}</h1>`
})
export class TestComponent implements OnInit {
  private name: string;
  constructor() {
    // super();
  }
  ngOnInit() {
    this.name = 'test';
  }
}
