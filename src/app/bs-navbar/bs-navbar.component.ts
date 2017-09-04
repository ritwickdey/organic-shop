import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { IAppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {


  navbarCollapsed: boolean;
  appUser: IAppUser = {} as IAppUser;
  totalCart$: Observable<ShoppingCart>;

  constructor(private cartService: ShoppingCartService, private authService: AuthService) { }

  async ngOnInit() {
    this.authService.appUser$.subscribe(user => this.appUser = user);
    this.totalCart$ = await this.cartService.getCart();
  }

  logout() {
    this.authService.logout();
  }

}
