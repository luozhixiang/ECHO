(function($) {

	brite.registerView("StudyCreate", {
		loadTmpl : true,
		emptyParent : true,
		parent : ".MainScreen-content"
	}, {
		create : function(data, config) {
			var view = this;
			return $("#tmpl-StudyCreate").render({});
		},
		
		postDisplay: function(){
			var view = this;
		 	var $e = view.$el;
		},
		
		events: {
			"btap; .btnBack": btnBackMethod 
		}

	});
	
	
	// --------- Event Methods --------- //
	function btnBackMethod(){
		brite.display("StudyView");
	}
	// --------- /Event Methods --------- //
	

})(jQuery);
