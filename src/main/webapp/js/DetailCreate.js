(function($) {

	brite.registerView("DetailCreate", {
		loadTmpl : true,
		emptyParent : true,
		parent : ".MainScreen-content"
	}, {
		create : function(data, config) {
			var view = this;
			return $("#tmpl-DetailCreate").render(data);
		},
		
		postDisplay: function(data){
			var view = this;
		 	var $e = view.$el;
		 	view.sid = data.id || 0;
		},
		
		events: {
			"btap; .btnBack": btnBackMethod,
			
			"btap; .btnSave": btnSaveMethod
		}


	});
	
	// --------- Event Methods --------- //
	function btnBackMethod(){
		var view = this;
		brite.display("StudyCreate",null,{sid:view.sid});
	}
	
	function btnSaveMethod(){
		var view = this;
		var $e = view.$el;
		
		var id = view.sid;
		var name = $e.find(".content input[name='name']").val();
		var tags = $e.find(".content input[name='tags']").val();
		var description = $e.find(".content textarea[name='description']").val();
		var study = {id:id,name:name,tags:tags,description:description};
		
		if(id==0){
			var date = new Date();
			study.creationDate = date;
			brite.dao("Study").create(study).done(function(study){
				brite.display("StudyCreate",null,{sid:study.id});
			});
		}else{
			brite.dao("Study").update(study).done(function(study){
				brite.display("StudyCreate",null,{sid:study.sid});			
			});
		}
		
	}
	
	// --------- /Event Methods --------- //
	

})(jQuery);
