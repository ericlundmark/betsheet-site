Template.dashboard.events={
    'click #add-sheets': function(){
	bootbox.prompt("Provide a name for your new sheet!", function(input){
	    if(input){
		Sheets.insert({
		    name:input,
		    author:Meteor.user(),
		    added:new Date(),
		    ROI:100,
		    games:[]
		},function(err, res){
		    console.log(res);
		});
	    }
	});
    },
    'click tr': function(event, template) {
	if(event.target.id=="delete-sheet"){
	    bootbox.confirm("Vill du ta bort detta sheet?", function(remove){
		if(remove){
		    Sheets.remove(event.currentTarget.id);
		}
	    })
	}else{
	    Router.go("sheet",{_id:event.currentTarget.id});
	}
    }
}
