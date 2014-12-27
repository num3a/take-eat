Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {

}



if (Meteor.isServer) {
  Meteor.startup(function () {
        // code to run on server at startup

        if(Messages.find().count() === 0){
          Messages.insert({text: 'Hello world', date: new Date()});
        }
      }
  );
}
