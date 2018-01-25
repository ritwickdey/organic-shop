import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListOrderViewComponent } from './components/list-order-view/list-order-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ListOrderViewComponent
  ],
  exports : [
    ProductCardComponent,
    ProductQuantityComponent,
    ListOrderViewComponent
  ]
})
export class SharedModule { }
