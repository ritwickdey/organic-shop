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
  carts: ShoppingCart;
  cartSubscription: Subscription;

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cartSubscription = (await this.cartService.getCart())
      .subscribe(carts => this.carts = carts);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

}
