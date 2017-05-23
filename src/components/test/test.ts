import { Component } from '@angular/core';

@Component({
  selector: 'test',
  styleUrls: [
    './test.css'
  ],
  templateUrl: './test.html'
})
export class TestComponent {
  private name: string = 'original test';
  constructor() {
    this.name = this.name || 'test';
  }
}
