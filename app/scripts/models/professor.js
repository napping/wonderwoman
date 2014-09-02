define([
	"jquery",
	"underscore",
	"backbone",
	"vent",			// event aggregator

	], function ( $, _, Backbone, vent ) { 
		var Professor = Backbone.Model.extend({ 
			defaults: { 
			},

			initialize: function () { 
			},
			
			// idAttribute: ,

			validate: function () { 
			}
		});

		return Professor;
	}
);

