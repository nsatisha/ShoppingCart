import { RoutingService } from 'src/app/shared/routing.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  isAuthenticated = null;

  constructor(private routingService: RoutingService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> | UrlTree {
    this.routingService.authenticate.subscribe((authenticated) => {
      console.log(' HeaderComponent Authentication :' + authenticated);
      this.isAuthenticated = authenticated;
    });
    console.log('Auth Guard Service' + this.isAuthenticated);

    if (this.isAuthenticated) {
      return true;
    } else {
      return this.router.createUrlTree(['/customerLogin']);
    }
  }
}
