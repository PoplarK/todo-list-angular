import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-footer',
  styleUrls: ['./footer.css'],
  templateUrl: './footer.html'
})
export class Footer {

  @Input() filter: String;
  @Input() total: Number;
  @Input() done: Number;
  @Output() setFilter = new EventEmitter<String>();
  @Output() clear = new EventEmitter();

  constructor() {
  }

  clickFilter = (type) => {
    switch(type) {
      case 'unDone':
        this.setFilter.emit('unDone');
        break;
      case 'done':
        this.setFilter.emit('done');
        break;
      case 'all':
      default:
        this.setFilter.emit('all');
    }
  }

  clickClear = () => {
    this.clear.emit();
  }
}
