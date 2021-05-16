import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Burger', 'Cheese burger', 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', [new Ingredient("Cheese", 1), new Ingredient("Bun", 2), new Ingredient("Onion", 3)]),
        new Recipe('Sandwich', 'Veg sandwich', 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/07/cream-cheese-sandwich-recipe-1-500x500.jpg', [new Ingredient("Bread", 2), new Ingredient("Onion", 3)])
    ];

    constructor(private shoppingListService: ShoppingListService) {};

    getRecipes() {
        return this.recipes.slice();
    };

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    };
}