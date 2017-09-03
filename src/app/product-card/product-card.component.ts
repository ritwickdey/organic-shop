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
  constructor() { }

  ngOnInit() {
  }

}
