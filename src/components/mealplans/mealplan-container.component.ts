import {IComponentController, IComponentOptions, ILogService} from 'angular';
import {Mealplan} from '../../models/Mealplan.model';

class MealplanController implements IComponentController {

    mealplan: Mealplan;

    constructor(private $log: ILogService) {

    }

    onInit() {
        this.$log.debug('init mealplan container', this.mealplan);
    }
}

export const MealplanContainer: IComponentOptions = {
    bindings: {
        mealplan: '<',
        recipes: '<'
    },

    controller: MealplanController,

    template: `
                <section class="mealplan-container col-md-4">
                    <h2>Planned Meals</h2>
                    <div ng-repeat="(recipeKey, num) in $ctrl.mealplan">
                        <mealplan-card
                            meal="$ctrl.recipes[recipeKey]">
                        </mealplan-card>
                    </div>
                </section>
            `
};