import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/Operators'
import { Registration } from '../class/registration';
import { Login } from '../class/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  reg_api_url = "https://api09.herokuapp.com/register";
  login_api_url = "https://api09.herokuapp.com/login";

  constructor(private http : HttpClient) { }

  registration(userdata) : Observable<Registration[]>{
    return this.http.post<Registration[]>(this.reg_api_url, userdata).pipe(catchError(this.errorhandler));
  }

  login(userdata) : Observable<Login[]>{
    return this.http.post<Login[]>(this.login_api_url, userdata).pipe(catchError(this.errorhandler));
  }



  errorhandler(error : HttpErrorResponse){
    return throwError(error);
  }
}
