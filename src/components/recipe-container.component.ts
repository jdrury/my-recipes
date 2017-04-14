import {IComponentController, IComponentOptions, ILogService} from 'angular';

class RecipeContainerController implements IComponentController {
    constructor(private $log: ILogService) {
    }

    $onInit() {
        this.$log.info('inside onInit');
    }
}

export const RecipeContainer: IComponentOptions = {
    bindings: {
        recipes: '<'
    },

    controller: RecipeContainerController,

    template: '<div>hello</div>'
};
