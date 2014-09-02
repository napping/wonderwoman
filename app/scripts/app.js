define([
	"backbone",
	"routes/router"

	], function (Backbone, router) { 
		var start = function () { 
			new router();
			Backbone.history.start();
		};

		return { start: start };
	}
);


