import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import {IBook} from '../models/book';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class BookService {

	constructor(private _http:Http){}
	private appResource = new Subject<object>();
  
	bookChange$ = this.appResource.asObservable();
	bookChange(obj:IBook, status?:number) {
		this.appResource.next(obj);
	}

	getBooks():Observable<IBook[]>{
		return this._http
				.get('http://localhost/angular-api/get-books.php')
				.map((rs:Response) => <IBook[]> rs.json())
				.catch(this.handleError);
	}

	private handleError(err: Response){
		console.log(err);
		return Observable.throw(err);
	}
  
}
