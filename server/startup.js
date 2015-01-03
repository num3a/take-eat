/**
 * Created by emmanuelernest on 28/12/14.
 */
// Application startup
Meteor.startup(function () {
        // code to run on server at startup

        Meteor.publish('lastMessages',function(){
            return Messages.find({},{sort : {date: -1}, limit : 15});
        });

        if(Messages.find().count() === 0){
            Messages.insert({text: 'Hello world', date: new Date()});
        }

        if(Dishes.find().count() === 0)
        {
            Dishes.insert({
                name: 'Burrito Frites',
                type: DishTypes.MainCourse.value
            });

            Dishes.insert({
                name: 'Tomates Mozzarella',
                type: DishTypes.Entree.value
            });

            Dishes.insert({
                name: 'Eclair au chocolat',
                type: DishTypes.Dessert.value
            });

            Dishes.insert({
                name: 'Coca Cola',
                type: DishTypes.Drink.value
            });
        }
    }
);