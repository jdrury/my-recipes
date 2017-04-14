import * as angular from 'angular';
import '../index';
import 'angular-mocks';

import { recipes } from '../recipe-store';

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
