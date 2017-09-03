import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCatagories() {
    return this.db.list('/catagories', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
