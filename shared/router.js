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
	onBeforeAction: function(){
	    return AccountsEntry.signInRequired(this)
	},
	waitOn: function() { return Meteor.subscribe('sheetsByUserId', Meteor.userId())},
	data: function() { return Sheets.find({"author._id":Meteor.userId()},{sort:{lastAdded:-1}}); }
    });
    this.route('sheet', {
	path: 'sheet/:_id',
	waitOn: function() { return Meteor.subscribe('sheet', this.params._id)},
	data: function() { return Sheets.findOne(this.params._id); }
    });
    this.route('add', {
	path: 'sheet/:_id/add',
	template: 'addGames',
	data: function() {return this.params._id;}
    });
    this.route('profile', {
	path: 'profile'
    });
});
