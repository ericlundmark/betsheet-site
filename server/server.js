Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
	seedUserId = Accounts.createUser({
	    email: 'erilu506@gmail.com',
	    password: '123456'
	});
    }
});
Meteor.publish("sheetsByUserId", function(userId) {
    return Sheets.find({"author._id":userId},{sort:{lastAdded:-1}});
});
Meteor.publish("sheet", function(sheetId) {
    return Sheets.find({_id:sheetId});
});
