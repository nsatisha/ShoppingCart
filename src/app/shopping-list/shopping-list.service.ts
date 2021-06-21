import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
/* import { EventEmitter } from '@angular/core'; */

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    editItems = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Chicken', 1),
        new Ingredient('Tamatoes', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        /* for (let ingrdent of ingredients) {
            this.addIngredient(ingrdent);
        } */

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredientByIndex(index: number) {
        return this.ingredients[index];
    }
    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
