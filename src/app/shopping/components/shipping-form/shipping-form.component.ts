import { ShoppingCart } from 'shared/models/shopping-cart';
import { OrderService } from 'shared/services/order.service';
import { Order } from 'shared/models/order';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  @Input('cart') carts: ShoppingCart;
  disableBtn: boolean;
  userId: string;
  userName: string;
  userSubscription: Subscription;


  constructor(
    private auth: AuthService,
    private router: Router,
    private orderService: OrderService) { }

  async ngOnInit() {
    this.userSubscription = this.auth.user$
      .subscribe(user => {
        this.userId = user.uid;
        this.userName = user.displayName || user.email;
      });
  }

  ngOnDestroy() {
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
