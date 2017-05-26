import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { TestComponent } from '../components/test/test';

import { Root } from '../components/root/root';
import { Header } from '../components/header/header';
import { Todo } from '../components/todo/todo';
import { Footer } from '../components/footer/footer';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [ Root, Header, Todo, Footer ],
  providers: [],
  bootstrap: [ Root ],
})
export class AppModule { }