/**
 * Created by emmanuelernest on 28/12/14.
 */
// Application startup
Meteor.startup(function () {
        // code to run on server at startup

        if(Messages.find().count() === 0){
            Messages.insert({text: 'Hello world', date: new Date()});
        }
    }
);