var app = app || {};

(function($){
	
	app.pressEvent = brite.ua.hasTouch() ? "touchstart" : "mousedown";
	
	app.formatDate = function(date,pattern){
		if(typeof pattern == "undefined"){ pattern = "MM/dd/yyyy"; }
		var str = "";
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		if(pattern.toLowerCase() == "long"){
			str = months[date.getMonth()] + " " + date.getDate() + ", "+date.getFullYear();
		}else if(pattern.toLowerCase() == "medium"){
			str =  date.getDate()+ " " + months[date.getMonth()].substring(0,3) + " "+date.getFullYear();
		}else{
			
		}
		return str;
		
	};
	
	
})(jQuery);

