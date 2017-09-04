import { IProduct } from './product';

export class ShoppingCartItem {

 constructor(public product: IProduct, public qty: number) {}

  get totalPrice() {
    return this.qty * this.product.price;
  }
}
