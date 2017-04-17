import * as angular from 'angular';
import 'angular-mocks';

import '../../app.module';
import { recipes } from '../../recipe-store';

describe('Component: RecipeContainer', () => {
    let $componentController: angular.IComponentControllerService;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject((_$componentController_: angular.IComponentControllerService) => {
        $componentController = _$componentController_;
    }));

    it('should have a defined component', () => {
        const bindings = { recipes };
        const component = $componentController('recipeContainer', null, bindings);
        expect(component).toBeDefined();
    });
});
