import { IShoppingCartItem } from './shopping-cart-items';

export class ShoppingCart {

  items: IShoppingCartItem[] = [];

  constructor(public itemsMap: { [key: string]: IShoppingCartItem }) {
    for (let productId in itemsMap) {
      this.items.push(itemsMap[productId]);
    }
  }


  get totalItemCount(): number {
    let count = 0;
    for (let productId in this.items) {
      count += this.items[productId].qty;
    }
    return count;
  }

}

