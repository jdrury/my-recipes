export const IngredientCard = {
    bindings: {
        ingredient: '<'
    },
    template: `<div>{{$ctrl.ingredient.quantity}} {{$ctrl.ingredient.name}}</div>`
};