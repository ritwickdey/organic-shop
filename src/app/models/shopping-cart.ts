import { IShoppingCartItem } from './shopping-cart-items';

export class ShoppingCart {


  constructor(items: IShoppingCartItem[]) {
    this.items = items;
  }


  get productIds(): string[] {
    return Object.keys(this.items);
  }


  items: IShoppingCartItem[] = [];

  get totalItemCount(): number {
    let count = 0;
    for (let productId in this.items) {
      count += this.items[productId].qty;
    }
    return count;
  }

}

