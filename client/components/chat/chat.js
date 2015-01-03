/**
 * Created by emmanuelernest on 26/12/14.
 */
    // TEMPLATE CHAT
    Meteor.subscribe('lastMessages');

    Template.chat.helpers({
        messages: function(){
            var messages = Messages.find({},{sort : {date: -1}, limit : 30});
            return messages;
        }
    });

    Template.chat.events({
        'click #submitButton': function(e){
            e.preventDefault();
            //alert(document.getElementById('inputMessage').value);
            var inputValue = $('#inputMessage').val();

            if(inputValue != null && inputValue.length > 0){
                Messages.insert({ text: inputValue, date: new Date()});
                console.log(inputValue + ' added to messages');
                $('#inputMessage').val('');
            }

            // document.getElementById('inputMessage').value = '';
        }
    });

