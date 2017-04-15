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
                <div ng-repeat="(key, recipe) in $ctrl.recipes">
                    <recipe-card
                        index="key"
                        details="recipe.details"
                        add-to-mealplan="$ctrl.addToMealplan(recipeKey)">
                    </recipe-card>
                </div>
            `
};
