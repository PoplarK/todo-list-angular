import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo',
  styleUrls: ['./todo.css'],
  templateUrl: './todo.html'
})
export class Todo {

  @Input() model;
  
  constructor() {
  }
}