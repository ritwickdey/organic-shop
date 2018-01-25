import { Observable } from 'rxjs/Observable';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  order$: Observable<any[]>;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order$ = this.orderService.getAllOrders();
  }

}
