define([
	"jquery",
	"underscore",
	"backbone",
	"vent",			// event aggregator

	], function ( $, _, Backbone, vent ) { 
		var Course = Backbone.Model.extend({ 
			defaults: { 
			},

			initialize: function () { 
			},
			
			// idAttribute: ,

			validate: function () { 
			}
		});

		return Course;
	}
);

