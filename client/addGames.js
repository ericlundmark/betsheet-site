var Games=new Meteor.Collection(null);
Template.addGameForm.events({
    'submit #form':function(event, template){
	event.preventDefault();
	var form=event.target;
	Games.insert({
	    team1:form.team1.value,
	    team2:form.team2.value,
	    amount:form.amount.value,
	    odds:form.odds.value
	});
	return false;
    }
});
Template.addGames.helpers({
    games: function(){
	return Games.find();
    }
});

Template.addGames.events({
    'click tr':function(event, template){
	if(event.target.id=="delete-game"){
	    Games.remove(event.currentTarget.id);
	}
    },
    'click #delete-all':function(event, template){
	Games.remove({});
    },
    'click #commit':function(event, template){
	var id = this.toString();
	var games = Games.find({}).fetch()
	Sheets.update(id,{
	    $push: {games: {$each:games}},
	    $set: {lastAdded: new Date()}},
	    function(err, res){
		if(err){
		    console.log(err);
		}else{
		    Games.remove({});
		    $("#commit").removeClass("btn-default");
		    $("#commit").addClass("btn-success");
		}
	    });
    }
});
