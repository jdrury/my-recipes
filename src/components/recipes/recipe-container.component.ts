import {IComponentController, IComponentOptions, ILogService} from 'angular';

class RecipeContainerController implements IComponentController {
    constructor(private $log: ILogService) {

    }

    $onInit() {
        this.$log.debug('init recipe container component');
    }
}

export const RecipeContainer: IComponentOptions = {
    bindings: {
        recipes: '<',
        addToMealplan: '&'
    },

    controller: RecipeContainerController,

    template: `
                <section class="recipes-container col-md-4">
                    <h2>Recipes</h2>
                    <div ng-repeat="(recipeKey, recipe) in $ctrl.recipes">
                        <recipe-card
                            recipe-key="recipeKey"
                            details="recipe.details"
                            add-to-mealplan="$ctrl.addToMealplan({recipeKey})">
                        </recipe-card>
                    </div>
                </section>
            `
};
