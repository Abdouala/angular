import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor() { }

  signIn(){
    return new Observable<boolean>(observer => {
      setTimeout(() => {
        observer.next(this.isAuth=true);
      }, 2000);
    })
  }

  signOut(){
    this.isAuth = false;
  }

}
