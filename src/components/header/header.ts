import { Component, Input, Output, OnChanges, SimpleChange , EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-header',
  styleUrls: ['./header.css'],
  templateUrl: './header.html'
})
export class Header implements OnChanges {

  @Input() canToggleAll: Boolean;
  @Input() done: Boolean;

  @Output() toggle = new EventEmitter();
  @Output() add = new EventEmitter<String>();

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("change", changes, this.done);
  }

  constructor() {
  }

  handleToggle = () => {
    this.toggle.emit();
  }

  handleAdd = (content: String) => {
    let value = content.trim();
    if(!value) return false;

    this.add.emit(value);
  }
}
