import { UserService } from 'shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
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
        let returnUrl = route.snapshot.queryParamMap.get('returnUrl');
        if (returnUrl || router.url === '/login')  {
          router.navigate([returnUrl || '/']);
        }
      }
    });
  }

}
