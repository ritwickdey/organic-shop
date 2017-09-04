import { ShoppingCartService } from './../shopping-cart.service';
import { IProduct } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input("product") product: IProduct = {} as IProduct;
  @Input("width") width = "20";
  @Input("show-actions") showActions = true;
  @Input("shopping-cart") shoppingCart : any = {};

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {

  }

  getQty() {

    if (!this.shoppingCart.items || !this.product.$key)
      return 0;

    let key = this.product.$key;
    let item = this.shoppingCart.items[key];
    return item ? item.qty : 0;
  }

}
