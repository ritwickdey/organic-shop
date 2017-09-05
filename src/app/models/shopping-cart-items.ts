import { IProduct } from './product';

export class ShoppingCartItem {

  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  qty:number

  get totalPrice() {
    return this.qty * this.price;
  }
}
