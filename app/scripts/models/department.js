define([
	"jquery",
	"underscore",
	"backbone",
	"events",			// event aggregator

	], function ( $, _, Backbone, vent ) { 
		var Department = Backbone.Model.extend({ 
			defaults: { 
			},

			initialize: function () { 
			},
			
			// idAttribute: ,

			validate: function () { 
			}
		});

		return Department;
	}
);

