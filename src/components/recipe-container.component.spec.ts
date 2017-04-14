import { RecipeContainer } from './recipe-container.component';
import { recipes } from '../recipe-store';

describe('Component: RecipeContainer', () => {

    let $componentController: RecipeContainer;

//    beforeEach(module('app.recipes'));

    beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
    }));

    it('should have a defined component', () => {
        let component = $componentController('RecipeContainer', null, {recipes});
        expect(component).toBeDefined();
    });

    it('accepts a list of recipes', () => {
        let component = $componentController('RecipeContainer', null, {recipes});
        // TODO is this the proper way to look for bindings?
        expect(component.recipes).toBeDefined();
    });
});
