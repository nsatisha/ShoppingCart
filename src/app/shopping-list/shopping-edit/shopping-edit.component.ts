import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subsrciption: Subscription;
  editMode = false;
  editedItemIndex: number;
  indegredient: Ingredient;
  @ViewChild('f') ngForm: NgForm;

  /*   @ViewChild ('shoppingName') shoppingNameRef: ElementRef;
    @ViewChild ('ShoppingAmount') ShoppingAmountRef: ElementRef; */
  constructor(private slservice: ShoppingListService) { }

  ngOnInit(): void {
    this.subsrciption = this.slservice.editItems.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.indegredient = this.slservice.getIngredientByIndex(index);
        this.ngForm.setValue({
          name: this.indegredient.name,
          amount: this.indegredient.amount
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    console.log('Edit Items');
    /*   const ingredientName = this.shoppingNameRef.nativeElement.value;
      const ingredientAmount = this.ShoppingAmountRef.nativeElement.value; */
    const itemValue = form.value;
    console.log(itemValue);
    const newIngredient = new Ingredient(itemValue.name, itemValue.amount);
    if (this.editMode) {
      this.slservice.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slservice.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  onDelete() {
    this.slservice.deleteIngredient(this.editedItemIndex);
    this.onClear();

  }

  onClear() {
    this.ngForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subsrciption.unsubscribe();
  }



}
