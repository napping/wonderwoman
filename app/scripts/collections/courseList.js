define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"models/course",

	], function ( $, _, Backbone, vent, Course ) { 
		var CourseList = Backbone.Collection.extend({ 
			model: Course,

			//idAttribute: "", 

			initialize: function () { 
			},

			url: function () { 
			},

			sort: function () {		// TODO sort professor by ...average/most recent rating?
			}
		});

		return CourseList;
	}
);



