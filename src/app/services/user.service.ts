import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    firstName: 'Kpan',
    lastName: 'Emonzaemon',
    email: 'kpan@gla.com',
    drinkPreference: 'Coca',
    hobbies:['coder', 'jouer']

  }];
  userSubject = new Subject<User[]>();

  constructor() { }

  emitUsers(){
    this.userSubject.next(this.users.slice()) // Slice : copie du tableau users
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
