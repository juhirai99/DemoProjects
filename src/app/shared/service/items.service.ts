import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ItemClass } from 'app/shared/model/item-class';
import { constants } from 'app/shared/constant/global.contants';
import { Response } from '@angular/http';


@Injectable()
export class ItemsService {
  items :ItemClass[]
  constructor(private http : Http) { }
  getEmployees() : Observable<ItemClass[]>{
    return this.http.get(constants.apiURL)
        .map((response: Response) => <ItemClass[]>response.json())
        .catch(this.handleError);
  }
  handleError(error: Response) {
    if (error.status == 500) {      
       console.log("Page not found")
    } else {
      return  Observable.throw(error);
 }
}
}
