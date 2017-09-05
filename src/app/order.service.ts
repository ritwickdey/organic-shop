import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase,
    private cartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this.db.list('/order').push(order);
    this.cartService.clearAllCart();
    return result;
  }




}
