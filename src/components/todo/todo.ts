import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo',
  styleUrls: ['./todo.css'],
  templateUrl: './todo.html'
})
export class TodoComponent {

  @Input() model: Todo;
  @Output() toggle = new EventEmitter();
  @Output() delete = new EventEmitter<Todo>();
  
  constructor() {
  }

  handleToggle = () => {
    this.model.toggle();
    this.toggle.emit();
  }

  handleDelete = () => {
    this.delete.emit(this.model);
  }

  handleEdit = () => {
  }
}