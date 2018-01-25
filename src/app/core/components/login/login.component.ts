import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.login(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    this.authService.login(new firebase.auth.FacebookAuthProvider());
  }

}
