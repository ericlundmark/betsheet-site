Meteor.publish("sheetsByUserId", function(userId) {
    return Sheets.find({"author._id":userId},{sort:{lastAdded:-1}});
});
Meteor.publish("sheet", function(sheetId) {
    return Sheets.find({_id:sheetId});
});
