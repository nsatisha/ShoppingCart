import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../shared/routing.service';
import { RegistrationService } from '../registration/registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  isAuthenticated = null;

  constructor(
    private routingService: RoutingService,
    private registrationService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routingService.authenticate.subscribe((authenticated) => {
      console.log(' HeaderComponent Authentication :' + authenticated);
      this.isAuthenticated = authenticated;
    });
  }

  onsaveRecipes() {
    this.routingService.onsaveRecipes();
  }

  onlogout() {
    this.isAuthenticated = false;
    this.router.navigate(['/customerLogin'], { relativeTo: this.route });
  }
}
