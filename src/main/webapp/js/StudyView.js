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
		 	view.studies_list = $e.find(".studies-list .bottom-list");
		 	refresh.call(view);
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
		
		brite.dao("Study").list().done(function(studies) {
			if(studies && studies.length>0){
				$.each(studies,function(i,study){
					study.formatCreationDate = app.formatDate(study.creationDate,"medium");
				});
				view.studies_list.empty().append($("#tmpl-StudyView-studies-item").render({studies:studies}));
				view.studies_content.removeClass("hide");
			}else{
				view.create_content.removeClass("hide");
			}
		});

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
