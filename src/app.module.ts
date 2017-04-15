import { module } from 'angular';
import {App} from './components/app.component';
import {RecipeContainer} from './components/recipe-container.component';

export const app = module('app', []);

app
    .component('app', App)
    .component('recipeContainer', RecipeContainer);
