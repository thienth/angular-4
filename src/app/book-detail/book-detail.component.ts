import { Component, Input } from '@angular/core';
import {IBook} from '../models/book';
@Component({
  moduleId: module.id,
  selector: 'detail-book',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {
    @Input() book:IBook
}
