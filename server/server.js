Meteor.publish("sheetsByUserId", function() {
    return Sheets.find({author:Meteor.userId()});
});
