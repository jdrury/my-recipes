import {RecipeDetails} from './RecipeDetails.model';
import {Ingredient} from './Ingredient.model';

export interface Recipes {
    [key: string]: {
        details: RecipeDetails;
        ingredients: Ingredient[];
        instructions: string[];
    };
}