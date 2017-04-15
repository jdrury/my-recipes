import { recipes } from '../recipe-store';
import {ILogService} from 'angular';
import {Recipes} from '../models/Recipes.model';
import {Mealplan} from '../models/Mealplan.model';

class AppController {
    recipes: Recipes;
    mealplan: Mealplan;

    constructor(private $log: ILogService) {

    }

    $onInit() {
        this.recipes = recipes;
        this.$log.info('init app component', this.recipes);
    }

    public addToMealplan(recipeKey:string) {
        this.mealplan[recipeKey] = 1;
        console.warn(recipeKey);
    }
}

export const App = {
    bindings: {},

    controller: AppController,

    template: `
                <recipe-container
                    recipes='$ctrl.recipes'
                    add-to-mealplan='$ctrl.addToMealplan(recipeKey)'>
                </recipe-container>
            `

};