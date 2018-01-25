import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products', {
      query: {
        orderByChild: 'category'
      }
    });
  }

  getById(id: string) {
    return this.db.object('/products/' + id);
  }

  updateById(id, product) {
    return this.db.object('/products/' + id).update(product);
  }

  deleteById(id) {
    return this.db.object('/products/' + id).remove();
  }
}
