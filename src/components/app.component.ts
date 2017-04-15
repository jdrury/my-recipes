import { recipes } from '../recipe-store';

class AppController {

    constructor() {

    }

    $onInit() {
        this.recipes = recipes;
        console.warn('hello');
    }
}

export const App = {
    bindings: {},

    controller: AppController,

    template: `
                <recipe-container recipes="$ctrl.recipes"></recipe-container>
            `

};