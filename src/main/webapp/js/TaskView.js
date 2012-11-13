(function($) {

	brite.registerView("TaskView", {
		loadTmpl : true,
		emptyParent : true,
		parent : ".MainScreen-content"
	}, {
		create : function(data, config) {
			var view = this;
			return $("#tmpl-TaskView").render({});
		},
		
		postDisplay: function(){
			var view = this;
		 	var $e = view.$el;
		 	var sid = view.sid;
		 	//refresh.call(view);
		},
		
		events: {
			"btap; .btn-create-new": createTaskMethod 
			
			"btap; .items": updateTaskMethod 
		}

	});
	
	// --------- Event Methods --------- //
//	function refresh() {
//		var view = this;
//		var $e = view.$el;
//		
//		brite.dao("Study").list().done(function(studies) {
//			if(studies && studies.length>0){
//				$.each(studies,function(i,study){
//					study.formatCreationDate = app.formatDate(study.creationDate,"medium");
//				});
//				view.studies_list.empty().append($("#tmpl-TaskView-studies-item").render({studies:studies}));
//				view.studies_content.removeClass("hide");
//			}else{
//				view.create_content.removeClass("hide");
//			}
//		});
//
//	}
	
	function createStudyMethod(event){
		var view = this;
		brite.display("TaskCreate");
	}

	
	// --------- /Event Methods --------- //
	

})(jQuery);
