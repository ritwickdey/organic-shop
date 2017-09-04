import { IProduct } from './models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async addToCart(product: IProduct) {
    this.updateItemQty(product,1);
  }

  async removeToCart(product) {
    this.updateItemQty(product,-1);
  }

  async getCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-cart/' + cartId);
  }

  private async updateItemQty(product: IProduct, change: number) {
    let cartId = await this.getOrCreateCartId();

    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      item$.update({ product: product, qty: (item.qty || 0) + change });
    });
  }
  private createCartId() {
    return this.db.list('shopping-cart').push({
      dateTime: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cardId');

    if (cartId) return cartId;

    let cart = await this.createCartId();

    localStorage.setItem('cardId', cart.key);
    return cart.key;
  }

  private getItem(cartId, key) {
    return this.db.object('/shopping-cart/' + cartId + '/items/' + key);
  }

}
