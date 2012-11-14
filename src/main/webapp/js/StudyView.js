(function($) {

	brite.registerView("StudyView", {
		loadTmpl : true,
		emptyParent : true,
		parent : ".MainScreen-content"
	}, {
		create : function(data, config) {
			var view = this;
			return $.when(app.StudyDao.list()).pipe(function(studyList){
						var haveStudy = false;
						if(studyList && studyList.length > 0){
							haveStudy = true;
							$.each(studyList,function(i,study){
								study.formatCreationDate = app.util.formatDate(study.creationDate,"medium");
							});
						}
						return $("#tmpl-StudyView").render({studies:studyList, haveStudy:haveStudy});
					});	
		},
		
		postDisplay: function(){
			var view = this;
		 	var $e = view.$el;
		 	view.create_content = $e.find(".create-content");
		 	view.studies_content = $e.find(".studies-content");
		 	view.studies_list = $e.find(".studies-list .bottom-list");
		},
		
		events: {
			"btap; .btn-create-new": createStudyMethod ,
			
			"btap; .items": updateStudyMethod 
		}

	});
	
	// --------- Event Methods --------- //
	function refresh() {
		var view = this;
		var $e = view.$el;
	}
	
	function createStudyMethod(event){
		var view = this;
		brite.display("StudyCreate",null,{sid:0});
	}
	
	function updateStudyMethod(event){
		var view = this;
		var $this = $(event.currentTarget);
		var id = $this.attr("data-entity-id");
		brite.display("StudyCreate",null,{sid:id});
	}
	
	// --------- /Event Methods --------- //
	

})(jQuery);
