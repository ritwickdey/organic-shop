import { AuthService } from 'shared/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  order$: Observable<any[]>;

  constructor(
    private auth: AuthService,
    private orderService: OrderService) { }

  ngOnInit() {
    this.order$ = this.auth.user$
      .switchMap(user => this.orderService.getOrderByUser(user.uid));
  }



}
