Meteor.publish("sheetsByUserId", function(userId) {
    return Sheets.find({"author._id":userId});
});
Meteor.publish("sheet", function(sheetId) {
    return Sheets.find({_id:sheetId});
});
