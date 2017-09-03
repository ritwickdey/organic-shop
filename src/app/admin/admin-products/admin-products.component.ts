import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  productList: { title: string }[];
  filteredProductList: any[];
  productSubscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productSubscription = this.productService.getAll()
      .subscribe(products => this.filteredProductList = this.productList = products);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  filter(query: string) {
    if (!query.trim()) {
      this.filteredProductList = this.productList;
      return;
    }
    this.filteredProductList = this.productList
      .filter(e => e.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }

}
