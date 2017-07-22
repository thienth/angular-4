import { Component } from '@angular/core';
import {IBook} from './models/book';
import {BookService} from './services/book.service';
@Component({
	moduleId: module.id,
  	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app angular 2';
  books:IBook[];
  constructor(private _bookService: BookService) {

    _bookService.bookChange$.subscribe(obj => {
      console.log(obj)
    });
  }

  ngOnInit(){
    this.getBooksFromApi();
  }

  getBooksFromApi(){

    this._bookService.getBooks()
          .subscribe(
              responseData => {
                this.books = responseData;
              },
              error => console.log(error)
          )
  }
}
