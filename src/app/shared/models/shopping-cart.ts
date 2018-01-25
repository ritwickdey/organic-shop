import { IProduct } from './product';
import { ShoppingCartItem } from './shopping-cart-items';

export class ShoppingCart {

  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [key: string]: ShoppingCartItem }) {
    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(new ShoppingCartItem({
        ...item,
        $key: productId,
      }));
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

