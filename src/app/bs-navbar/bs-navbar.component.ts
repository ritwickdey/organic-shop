import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(e => console.log(e));
   }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
