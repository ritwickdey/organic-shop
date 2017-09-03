import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { IProduct } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  filteredProducts: IProduct[];
  category$: Observable<any[]>;
  selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {

    this.productService.getAll().switchMap((products: IProduct[]) => {
      this.products = products;
      return this.route.queryParamMap;
    }).subscribe(param => {
      this.selectedCategory = param.get('category');
      console.log(this.selectedCategory, this.products);
      this.filteredProducts = this.selectedCategory ?
        this.products.filter(e => e.category === this.selectedCategory)
        : this.products;
    });

    this.category$ = this.categoryService.getCategories();
  }



}
