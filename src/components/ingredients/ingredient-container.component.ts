export const IngredientContainer = {
    bindings: {
        mealplan: '<',
        recipes: '<'
    },

    template: `
                <section class="ingredients-container col-md-4">
                    <h2>Shopping List</h2>
                    <div ng-repeat="(recipeKey, num) in $ctrl.mealplan">
                        <div ng-repeat="ingredient in $ctrl.recipes[recipeKey].ingredients">
                            <ingredient-card ingredient="ingredient"></ingredient-card>
                        </div>
                    </div>
                </section>
            `
};