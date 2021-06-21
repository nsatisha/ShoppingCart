import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { LoggingService } from 'src/app/logging.service';
/* import { RecipeService } from '../../recipe.service'; */

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [LoggingService]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;
  /* constructor(private recipeService: RecipeService, private logger: LoggingService) { } */

  ngOnInit(): void {
  }

/*   onRecipeSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
    this.logger.onStatusChange('recipeItem Log');
  } */

}
