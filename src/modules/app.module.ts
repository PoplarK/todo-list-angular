import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { TestComponent } from '../components/test/test';

import { Root } from '../components/root/root';
import { Header } from '../components/header/header';
import { TodoComponent } from '../components/todo/todo';
import { Footer } from '../components/footer/footer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [ Root, Header, TodoComponent, Footer ],
  providers: [],
  bootstrap: [ Root ],
})
export class AppModule { }