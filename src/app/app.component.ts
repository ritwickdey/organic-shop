import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(authService: AuthService, userService: UserService, route: ActivatedRoute, router: Router) {
    authService.user$.subscribe((user) => {
      if (user) {
        userService.add(user);
        let returnUrl = route.snapshot.queryParamMap.get('returnUrl') || '/';
        router.navigate([returnUrl]);
      }
    });
  }

}
