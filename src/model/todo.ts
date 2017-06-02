export class Todo {
  private _content: String;
  private _isDone: Boolean = false;
  constructor(text: String = '') {
    this._content = text;
  }
  get content(): String {
    return this._content;
  }
  set content(text: String) {
    this._content = text;
  }
  get isDone(): Boolean {
    return this._isDone;
  }
  done() {
    this._isDone = true;
  }
  unDone() {
    this._isDone = false;
  }
  toggle() {
    this._isDone = !this._isDone;
  }
}
