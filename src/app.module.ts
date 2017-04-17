import { module } from 'angular';

import {App} from './components/app.component';

import {MealplanContainer} from './components/mealplans/mealplan-container.component';
import {MealplanCard} from './components/mealplans/mealplan-card.component';

import {IngredientContainer} from './components/ingredients/ingredient-container.component';
import {IngredientCard} from './components/ingredients/ingredient-card.component';

import {RecipeContainer} from './components/recipes/recipe-container.component';
import {RecipeCard} from './components/recipes/recipe-card.component';

export const app = module('app', []);

app
    .component('app', App)
    .component('mealplanContainer', MealplanContainer)
    .component('mealplanCard', MealplanCard)
    .component('ingredientContainer', IngredientContainer)
    .component('ingredientCard', IngredientCard)
    .component('recipeContainer', RecipeContainer)
    .component('recipeCard', RecipeCard);
