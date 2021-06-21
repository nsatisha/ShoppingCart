import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BaiscHighLightDirective } from './basicHighlightDirective/basic.hightlight.directive';
import { CustomDirectiveDirective } from './basicHighlightDirective/custom-directive.directive';
import { DropDownDirective } from './shared/dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingCartRoutesModule } from './app.routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CustomerSignupComponent } from './registration/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './registration/customer-login/customer-login.component';
import { RecipeService } from './recipes/recipe.service';
import { RegistrationService } from './registration/registration.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BaiscHighLightDirective,
    CustomDirectiveDirective,
    DropDownDirective,
    FooterComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    CustomerSignupComponent,
    CustomerLoginComponent,
  ],
  imports: [
    BrowserModule,
    ShoppingCartRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
