(function($) {

	brite.registerView("StudyView", {
		loadTmpl : true,
		emptyParent : true,
		parent : ".MainScreen-content"
	}, {
		create : function(data, config) {
			var view = this;
			return $("#tmpl-StudyView").render({});
		},
		
		postDisplay: function(){
			var view = this;
		 	var $e = view.$el;
		 	view.create_content = $e.find(".create-content");
		 	view.studies_content = $e.find(".studies-content");
		 	refresh.call(view);
		},
		
		events: {
			"btap; .btn-create-new": createStudyMethod 
		}

	});
	
	// --------- Event Methods --------- //
	function refresh() {
		var view = this;
		var $e = view.$el;

		brite.dao("Study").list().done(function(studies) {
			if(studies && studies.length>0){
				view.studies_content.removeClass("hide");
			}else{
				view.create_content.removeClass("hide");
			}
		});

	}
	
	function createStudyMethod(event){
		var view = this;
		brite.display("StudyCreate");
	}
	// --------- /Event Methods --------- //
	

})(jQuery);
