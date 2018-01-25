import { Observable } from 'rxjs/Observable';
import { IAppUser } from '../models/app-user';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  add(user: firebase.User) {
    this.db.object('/user/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string) {
    return this.db.object('/user/' + uid) as Observable<IAppUser>;
  }

}
