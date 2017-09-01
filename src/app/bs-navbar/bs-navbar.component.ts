import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnDestroy {


  appUser: AppUser;
  subscription : Subscription ;

  constructor(private authService: AuthService) {
    this.subscription = authService.appUser$.subscribe(user => this.appUser = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
