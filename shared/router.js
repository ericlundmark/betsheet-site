Router.configure({
  layoutTemplate: 'masterLayout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.map(function() {
    this.route('index', {
	path: '/'
    });
    this.route('dashboard', {
	path: 'dashboard',
	waitOn: function() { return Meteor.subscribe('sheetsByUserId', Meteor.userId())},
	data: function() { return Sheets.find({"author._id":Meteor.userId()},{sort:{added:-1}}); }
    });
    this.route('sheet', {
	path: 'sheet/:_id',
	waitOn: function() { return Meteor.subscribe('sheet', this.params._id)},
	data: function() { return Sheets.findOne(this.params._id); }
    });
    this.route('profile', {
	path: 'profile'
    });
});
