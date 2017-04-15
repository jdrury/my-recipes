import {IComponentController, IComponentOptions, ILogService} from 'angular';

class RecipeContainerController implements IComponentController {
    constructor(private $log: ILogService) {
    }

    $onInit() {
    }
}

export const RecipeContainer: IComponentOptions = {
    bindings: {
        recipes: '<'
    },

    controller: RecipeContainerController,

    template: `
                <div ng-repeat="(key, recipe) in $ctrl.recipes">
                    <h4 ng-bind="recipe.details.name"></h4>
                    <div ng-bind="recipe.details.desc"></div>
                </div>
            `
};
