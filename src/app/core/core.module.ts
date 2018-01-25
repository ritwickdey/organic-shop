import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    BsNavbarComponent,
    LoginComponent
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
