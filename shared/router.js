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
	data: function() { return Sheets.find({author:Meteor.userId()}); }
    });
    this.route('profile', {
	path: 'profile'
    });
});
