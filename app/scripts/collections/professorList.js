define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"models/professor",

	], function ( $, _, Backbone, vent, Professor ) { 
		var ProfessorList = Backbone.Collection.extend({ 
			model: Professor,

			//idAttribute: "", 

			initialize: function () { 
			},

			url: function () { 
			},

			sort: function () {		// TODO sort professors by average/most recent rating?
			}
		});

		return ProfessorList;
	}
);



