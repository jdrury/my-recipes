import { module } from 'angular';
import {RecipeContainer} from './components/recipe-container.component';

export const app = module('app', []);

app.component('recipeContainer', RecipeContainer);
