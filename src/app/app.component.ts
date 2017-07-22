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
  title = 'app';
  constructor(private _bookService: BookService) {

    _bookService.bookChange$.subscribe(obj => {
      console.log(obj)
    });
  }
  books:IBook[] = [
  	{
  		id:1,
  		name: 'mat biec',
  		author: 'nguyen nhat anh',
  		image: '/assets/images/Koala.jpg',
  		price: 12.5
  	},
  	{
  		id:2,
  		name: 'mat xanh',
  		author: 'nguyen nhat em',
  		image: '/assets/images/Jellyfish.jpg',
  		price: 12.6
  	},
  	{
  		id:3,
  		name: 'mo do',
  		author: 'nguyen nhat bac',
  		image: '/assets/images/Lighthouse.jpg',
  		price: 12.7
  	},
  	{
  		id:4,
  		name: 'mat tim',
  		author: 'nguyen nhat chau',
  		image: '/assets/images/Tulips.jpg',
  		price: 12.5
  	},

  ];
}
