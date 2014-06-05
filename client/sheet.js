Template.sheet.events({
    'click #add-games': function(event, template){
	Router.go("add",{_id:template.data._id});
    }
});
