import { IProduct } from './product';
import { ShoppingCartItem } from './shopping-cart-items';

export class ShoppingCart {

  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [key: string]: ShoppingCartItem }) {
    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      let x = new ShoppingCartItem();
      Object.assign(x, item);
      x.$key = productId;
      this.items.push(x);
    }

  }

  getQty(product: IProduct) {
    let item = this.itemsMap[product.$key];
    return item ? item.qty : 0;
  }


  get totalItemCount(): number {
    let count = 0;
    this.items.forEach(item => {
      count += item.qty;
    });
    return count;
  }

  get totalPrice() {
    let count = 0;
    this.items.forEach(item => {
      count += item.totalPrice;
    });

    return count;
  }

}

