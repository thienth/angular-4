import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {IBook} from '../models/book';
@Injectable()
export class BookService {

  private appResource = new Subject<object>();
  
  bookChange$ = this.appResource.asObservable();
  bookChange(obj:IBook, status?:number) {
    this.appResource.next(obj);
  }
  
}
