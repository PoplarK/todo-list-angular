import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.html'
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
