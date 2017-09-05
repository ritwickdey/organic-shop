import { Order } from './../models/order';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { OrderService } from './../order.service';
import { ShoppingCart } from './../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  userId: string;
  userName: string;
  carts: ShoppingCart;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  disableBtn: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    private orderService: OrderService,
    private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cartSubscription = (await this.cartService.getCart())
      .subscribe(carts => this.carts = carts);

    this.userSubscription = this.auth.user$
      .subscribe(user => {
        this.userId = user.uid,
          this.userName = user.displayName || user.email
      });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  save(shipping) {

    let order = new Order(this.userId, this.userName, shipping, this.carts);

    this.orderService.placeOrder(order)
      .then(ref => {
        this.router.navigate(['order-success', ref.key]);
      })
      .catch(err => {
        this.disableBtn = false;
        console.log(err);
      });


    this.disableBtn = true;

  }

}
