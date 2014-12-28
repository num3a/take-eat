
    Template.home.helpers({
        messages: function(){
            var messages = Messages.find({},{sort : {date: -1}});
            return messages;
        }
    });