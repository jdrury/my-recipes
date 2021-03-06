import {ILogService} from 'angular';
import {RecipeDetails} from '../../models/RecipeDetails.model';

class RecipeCardController {

    details: RecipeDetails;
    isDescCollapsed: boolean = false;

    constructor(private $log: ILogService) {

    }

    $onInit() {
        this.$log.debug('init recipe card', this.details);
    }

    public handleDescClick(desc:string) {
        this.isDescCollapsed = !this.isDescCollapsed;

        if (this.isDescCollapsed) {
            desc = desc.split(' ').slice(0, 24).join(' ') + '...';
        }

        return desc;
    }
}
export const RecipeCard = {
    bindings: {
        details: '<',
        recipeKey: '<',
        addToMealplan: '&'
    },

    controller: RecipeCardController,

    template: `
            <div class="recipe">
                <img class="recipe__image" ng-src="{{$ctrl.details.imgUrl}}" alt="{{$ctrl.details.name}}" />
                
                <p class="recipe__name" ng-bind="$ctrl.details.name"></p>
                
                <p ng-click="$ctrl.handleDescClick($ctrl.details.desc)"
                    class="recipe__desc"
                    ng-bind="$ctrl.details.desc"></p>

                <button
                    class="btn btn-primary btn-sm"
                    ng-click="$ctrl.addToMealplan({recipeKey: $ctrl.recipeKey})">Select Recipe</button>
            </div>
            `
}
