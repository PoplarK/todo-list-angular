import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from '../components/test/test';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [ TestComponent ],
  providers: [],
  bootstrap: [ TestComponent ],
})
export class AppModule { }