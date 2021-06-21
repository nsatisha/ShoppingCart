import { Injectable } from '@angular/core';
/* import { Subject } from 'rxjs'; */
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) { }
   /*  recipeSelected = new Subject<Recipe>(); */
    private recipes: Recipe[] = [
        new Recipe('Zucchini Wraps',
            'This Grilled Zucchini Wraps With Goat Cheese recipe is simply delicious',
            'https://storage.needpix.com/rsynced_images/zucchini-wraps-1967456_1280.jpg',
            [new Ingredient('Zucchini', 1),
            new Ingredient('tamatoes', 2),
            new Ingredient('Red Onion', 3),
            new Ingredient('Cheese', 2)]),
        new Recipe('Arabian Chicken Biryani',
            'Biryani is one of the most amazing royal delicacies introduced to indians by the Mughals',
            'https://live.staticflickr.com/1872/42778426030_53a66620b9_b.jpg',
            [new Ingredient('Chicken stock', 21),
            new Ingredient('Basmati rice', 2),
            new Ingredient('Potato(big size)', 3),
            new Ingredient('Ginger garlic paste', 2)]),
        new Recipe('Creamy Sundae ice cream', 'It typically consists of one or more scoops of ice cream topped with sauce or syrup & toppings',
            'https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg',
            [new Ingredient('Cashews ', 10),
            new Ingredient('Coconut milk', 2),
            new Ingredient('Vanilla', 3),
            new Ingredient('Dates', 2)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToCart(ingredient: Ingredient[]) {
        this.slService.addIngredients(ingredient);

    }
    getRecipeById(id: number){
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index);
        this.recipeChanged.next(this.recipes.slice());
    }
}
