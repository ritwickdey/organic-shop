import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { IProduct } from './../models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: IProduct[] = [];
  filteredProducts: IProduct[];
  category: string;
  carts = {};
  cartSubscription: Subscription;

  constructor(
    private cartService: ShoppingCartService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  async ngOnInit() {

    this.productService.getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = !this.category ? this.products
          : this.products.filter(e => e.category === this.category);
      });

    this.cartSubscription = (await this.cartService.getCart())
      .subscribe(carts => this.carts = carts);

  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
