import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminModule } from 'app/admin/admin.module';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { CategoryService } from './shared/services/category.service';
import { OrderService } from './shared/services/order.service';
import { ProductService } from './shared/services/product.service';
import { ShoppingCartService } from './shared/services/shopping-cart.service';
import { UserService } from './shared/services/user.service';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { OrderSuccssComponent } from './shopping/components/order-succss/order-succss.component';
import { OrderViewComponent } from './shopping/components/order-view/order-view.component';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { ShopingCartComponent } from './shopping/components/shoping-cart/shoping-cart.component';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccssComponent,
    ShopingCartComponent,
    MyOrdersComponent,
    LoginComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    DataTableModule,
    SharedModule,
    AdminModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'Products', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: ShopingCartComponent },

      { path: 'myorders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
      { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccssComponent, canActivate: [AuthGuardService] },
      { path: 'order-details/:id', component: OrderViewComponent, canActivate: [AuthGuardService] }
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
