import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { User } from 'src/app/Model/user.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  baseURL:any = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getUsers():  Observable<User[]> {
    return this.http.get<User[]>(this.baseURL+`user/read.php`)
    .pipe(
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      console.error('An error occurred:', error.error);
    } else {

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
