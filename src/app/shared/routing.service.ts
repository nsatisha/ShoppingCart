import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Customer } from '../registration/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoutingService {
  authenticate = new Subject();
  loading = false;
  isAuthenticate = false;

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onsaveRecipes() {
    const recpies = this.recipeService.getRecipes();
    console.log(recpies);
    this.http
      .post('/api/saveRecipes', recpies, {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .subscribe((responsedata) => {
        console.log(responsedata);
      });
  }

  saveCustomer(signupFormValues: Customer) {
    console.log('RoutingService', signupFormValues);
    this.http
      .post('/api/signUp', signupFormValues, {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .subscribe((responsedata) => {
        console.log(this.loading);
        this.router.navigate(['/customerLogin'], { relativeTo: this.route });
      });
  }

  getUser(username: string, password: string) {
    console.log('getUser');
    this.http
      .get('/api/getUser', {
        params: { username },
      })
      .subscribe((responsedata: Customer) => {
        console.log(
          'Customer' +
            responsedata[0].username +
            ' :' +
            responsedata[0].password
        );

        if (
          responsedata[0].username === username &&
          responsedata[0].password === password
        ) {
          this.router.navigate(['/recipes'], { relativeTo: this.route });
          this.isAuthenticate = true;
          this.authenticate.next(this.isAuthenticate);
          console.log(
            'Authentication in Routing Service in getUser:' +
              this.isAuthenticate
          );
        }
      });
  }
}
