import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BookService} from './services/book.service';

import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
