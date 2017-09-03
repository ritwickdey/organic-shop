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

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }

}
