import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-order-view',
  templateUrl: './list-order-view.component.html',
  styleUrls: ['./list-order-view.component.css']
})
export class ListOrderViewComponent implements OnInit {

  @Input('order$') order$: Observable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
