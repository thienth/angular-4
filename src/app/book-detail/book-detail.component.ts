import { Component, Input } from '@angular/core';
import {IBook} from '../models/book';
import {BookService} from '../services/book.service';
@Component({
  moduleId: module.id,
  selector: 'detail-book',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {
    @Input() book:IBook;
    @Input() thienth:IBook;

    constructor(private _bookService: BookService) {}

    childAction(b){

      this._bookService.bookChange(b);
    }
}
