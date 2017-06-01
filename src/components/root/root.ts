import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'tl-root',
  styleUrls: ['./root.css'],
  templateUrl: './root.html'
})

export class Root implements OnInit {
  private allDone: Boolean = false;
  private todos: Array<Todo> = [];

  constructor() {
  }

  public get isEmpty () {
    return !(this.todos.length > 0);
  }

  ngOnInit() {
    let len = this.todos.length;
    let sub = this.getSubTodos('done');
    this.allDone = len > 0 && sub.length === len;
  }

  toggleAll = () => {
    let all = this.todos,
      done = this.getSubTodos("done");
    if(all.length<1) {
      this.allDone = false;
    } else if(done.length!==all.length) {
      this.todos = this.todos.map(item => {
        item.done();
        return item;
      });
      this.allDone = true;
    } else {
      this.todos = this.todos.map(item => {
        item.unDone();
        return item;
      });
      this.allDone = false;
    }
  }

  getSubTodos(type) {
    let result;
    switch(type) {
      case "unDone":
        result = this.todos.filter(item => {
          return !item.isDone;
        });
        break;
      case "done":
        result = this.todos.filter(item => {
          return item.isDone;
        });
        break;
      case "all":
      default:
        result = this.todos;
    }
    return result;
  }

  addOne = (content: string) => {
    this.todos.push(new Todo(content));
    this.allDone = false;
  }

  toggleOne = () => {
    let all = this.todos,
      done = this.getSubTodos("done");
    if(all.length<1) {
      this.allDone = false;
    } else if(done.length!==all.length) {
      this.allDone = false;
    } else {
      this.allDone = true;
    }
  }

  deleteOne = (todo: Todo) => {
    let index = this.todos.findIndex(item => {
      return item === todo;
    });
    this.todos.splice(index, 1);
    this.toggleOne();
  }
}
