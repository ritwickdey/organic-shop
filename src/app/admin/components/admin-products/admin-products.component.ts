import { IProduct } from 'shared/models/product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  productList: IProduct[];
  productSubscription: Subscription;
  items: IProduct[] = [];
  itemsCount: number;

  tableResource: DataTableResource<IProduct>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productSubscription = this.productService.getAll()
      .subscribe(products => {
        this.productList = products;
        this.initializationDataTable(products);
      });
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  private initializationDataTable(products: IProduct[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 }).then(item => this.items = item);
    this.tableResource.count().then(count => this.itemsCount = count);
  }

  filter(query: string) {

    let filteredProductList = query.trim() ?
      this.productList.filter(e => e.title.toLowerCase().indexOf(query.toLowerCase()) !== -1) :
      this.productList;

    this.initializationDataTable(filteredProductList);
  }

  reloadItems(params) {
    if (!this.tableResource) return;
    this.tableResource.query(params)
      .then(items => this.items = items);
  }

}
