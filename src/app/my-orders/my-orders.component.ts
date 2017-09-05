import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs/Observable';
import { OrderService } from './../order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, OnDestroy {

  order$: Observable<any[]>;
  subscription: Subscription;
  constructor(
    private auth: AuthService,
    private orderService: OrderService) { }

    ngOnInit() {
      this.subscription = this.auth.user$.subscribe(user => {
        this.order$ = this.orderService.getOrderByUser(user.uid);
      })
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
