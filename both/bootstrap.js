// Initialize mongodb collections
Messages = new Meteor.Collection('messages');
Dishes = new Meteor.Collection('dishes');

DishTypes = {
    Entree: {value: 1, name: 'entree'},
    MainCourse: {value: 2, name: 'main course'},
    Dessert: {value: 3, name: 'dessert'},
    Drink: {value: 4, name: 'drink'}
};


