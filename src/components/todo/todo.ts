import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo',
  styleUrls: ['./todo.css'],
  templateUrl: './todo.html'
})
export class TodoComponent {
  private isEditing: Boolean = false;

  @ViewChild('input') child;

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
    this.isEditing = true;
    setTimeout(() => {
      this.child.nativeElement.focus();
    }, 5);
  }

  handleSave = (content: String) => {
    if(content.trim()) {
      this.model.content = content;
    }
    this.isEditing = false;
  }
}