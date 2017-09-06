import { IProduct } from './product';

export class ShoppingCartItem {

  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  qty: number;

  constructor(param?: Partial<ShoppingCartItem>) {
    Object.assign(this, param);
  }

  get totalPrice() {
    return this.qty * this.price;
  }
}
