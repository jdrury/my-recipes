export const MealplanCard = {
    bindings: {
        meal: '<'
    },
    template: `<div ng-bind="$ctrl.meal.details.name"></div>`
};