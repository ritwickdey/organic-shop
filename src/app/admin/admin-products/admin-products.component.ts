import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  productList$;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList$ = this.productService.getAll();
  }

}
