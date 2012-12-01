(function($, app) {
	function loading(amt) {
		$("#loading").show();
		$("#loading .bar").css("width", amt + "%");
		if(amt === 100) {
			$("#loading").delay(500).fadeOut("fast");
		}
	}

	app.Router = Backbone.Router.extend({
		routes: {
			"page/:page": "showPage",
			"*actions": "defaultRoute" // Backbone will try match the route above first
		},
		defaultRoute: function(actions) {
			alert(actions);
		},

		showPage: function(page) {
			loading(50);
			page = page || "home";
			console.log("Navigating to ", page)
			$("#content").load("pages/" + page + ".html", function() {
				loading(100);
			});
		}

	});

}(jQuery, window.app = window.app || {}));