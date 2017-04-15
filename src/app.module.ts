import { module } from 'angular';

import {App} from './components/app.component';
import {RecipeContainer} from './components/recipe-container.component';
import {RecipeCard} from './components/recipe-card.component';

export const app = module('app', []);

app
    .component('app', App)
    .component('recipeContainer', RecipeContainer)
    .component('recipeCard', RecipeCard);
