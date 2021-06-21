import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  ingredientsSub: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.ingredientsSub = this.slService.ingredientsChanged.subscribe(
      (ingrednts: Ingredient[]) => {
        this.ingredients = ingrednts;
      }
    );
  }

  editItem(index: number) {
    this.slService.editItems.next(index);
  }
  ngOnDestroy() {
    this.ingredientsSub.unsubscribe();
  }


}
