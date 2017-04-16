import { module } from 'angular';

import {App} from './components/app.component';

import {RecipeContainer} from './components/Recipes/recipe-container.component';
import {RecipeCard} from './components/Recipes/recipe-card.component';

import {MealplanContainer} from './components/Mealplans/mealplan-container.component';
import {MealplanCard} from './components/Mealplans/mealplan-card.component';

export const app = module('app', []);

app
    .component('app', App)
    .component('recipeContainer', RecipeContainer)
    .component('recipeCard', RecipeCard)
    .component('mealplanContainer', MealplanContainer)
    .component('mealplanCard', MealplanCard);
