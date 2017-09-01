import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(authService: AuthService, route:ActivatedRoute ,router: Router) {
    authService.user$.subscribe((user) => {
      if (user) {
        let returnUrl = route.snapshot.queryParamMap.get('returnUrl') || '/';
        router.navigate([returnUrl]);
      }
    });
  }

}
