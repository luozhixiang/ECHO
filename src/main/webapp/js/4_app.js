var app = app || {};

(function($){
	
	app.pressEvent = brite.ua.hasTouch() ? "touchstart" : "mousedown";
	
	
})(jQuery);

