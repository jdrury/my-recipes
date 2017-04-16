import { recipes } from '../recipe-store';
import {ILogService} from 'angular';
import {Recipes} from '../models/Recipes.model';
import {Mealplan} from '../models/Mealplan.model';

class AppController {
    recipes: Recipes;
    mealplan: Mealplan = {};

    constructor(private $log: ILogService) {

    }

    $onInit() {
        this.recipes = recipes;
        this.$log.info('init app component', this.recipes);
    }

    public addToMealplan(recipeKey:string) {
        if (recipeKey) {
            this.mealplan[recipeKey] = 1;
            console.log(this.mealplan);
        }
    }
}

export const App = {
    bindings: {},

    controller: AppController,

    template: `
                <mealplan-container
                    mealplan="$ctrl.mealplan"
                    recipes="$ctrl.recipes">
                </mealplan-container>
                <recipe-container
                    recipes="$ctrl.recipes"
                    add-to-mealplan="$ctrl.addToMealplan(recipeKey)">
                </recipe-container>
            `

};