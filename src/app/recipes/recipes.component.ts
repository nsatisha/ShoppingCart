import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration/registration.service';
import { LoggingService } from '../logging.service';
/* import { Recipe } from './recipe.model'; */

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  isAuthenticated = null;
/*   recipeSelected: Recipe; */
  constructor(private registrationService: RegistrationService, private logger: LoggingService ) { }

  ngOnInit(): void {
    /* this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeSelected = recipe;
      }
    ); */
  }
}
