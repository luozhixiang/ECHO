(function($) {

	brite.registerView("StudyCreate", {
		loadTmpl : true,
		emptyParent : true,
		parent : ".MainScreen-content"
	}, {
		create : function(data, config) {
			var view = this;
			return $("#tmpl-StudyCreate").render(data);
		},
		
		postDisplay: function(data){
			var view = this;
			view.sid = data.sid;
		 	var $e = view.$el;
		},
		
		events: {
			"btap; .btnBack": btnBackMethod,
			
			"btap; .btnDetail": btnDetailMethod,
			
			"btap; .btnTask": btnTaskMethod ,
			
			"btap; .btnTestUser": btnTestUserMethod 
		}

	});
	
	
	// --------- Event Methods --------- //
	function btnBackMethod(){
		brite.display("StudyView");
	}
	
	function btnDetailMethod(){
		var view = this;
		app.StudyDao.get(view.sid).done(function(study){
			study = study || {};
			brite.display("DetailCreate",null,study);
		});
	}
	
	function btnTaskMethod(){
		var view = this;
		brite.display("TaskView",null,{sid:view.sid});
		
	}
	
	function btnTestUserMethod(){
		var view = this;
		brite.display("TestUserView",null,{sid:view.sid});
	}
	
	// --------- /Event Methods --------- //
	

})(jQuery);
