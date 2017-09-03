import { IProduct } from './models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('shopping-cart').push({
      dateTime: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-cart/' + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cardId');

    if (cartId) return cartId;

    let result = await this.create();

    localStorage.setItem('cardId', result.key);
    return result.key;
  }

  private getItem(cartId, key) {
    return this.db.object('/shopping-cart/' + cartId + '/items/' + key);
  }

  async addToCart(product: IProduct) {
    let cartId = await this.getOrCreateCartId();

    let item$ = this.getItem(cartId, product.$key);

    item$.take(1)
      .subscribe(item => {
        item$.update({ product: product, qty: (item.qty || 0) + 1 });
      });
  }
}
