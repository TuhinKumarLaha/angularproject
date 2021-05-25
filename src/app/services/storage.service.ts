import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setIitialToken(token : string){
    window.sessionStorage.setItem('logintoken',token);
  }

  getToken(){
    return window.sessionStorage.getItem('logintoken');
  }

  deleteToken(){
    window.sessionStorage.clear();
  }

  constructor() { }
}
