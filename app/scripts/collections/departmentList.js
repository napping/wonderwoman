define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"models/department",

	], function ( $, _, Backbone, vent, Department ) { 
		var DepartmentList = Backbone.Collection.extend({ 
			model: Department,

			//idAttribute: "", 

			initialize: function () { 
			},

			url: function () { 
			},
		});

		return DepartmentList;
	}
);



