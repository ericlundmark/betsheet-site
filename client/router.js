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
	path: 'dashboard'
    });
});
