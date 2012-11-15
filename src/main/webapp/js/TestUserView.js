;(function() {

	brite.registerView("TestUserView", {
		loadTmpl : true,
		emptyParent : true,
		parent : ".MainScreen-content"
	}, {
		create : function(data, config) {
			return $.when(app.TestUserDao.list({match:{study_id:data.sid}})).pipe(function(users){
				$.each(users,function(i,user){ user.index=i+1; });
				return $("#tmpl-TestUserView").render({users:users});
			});	
		},
		
		postDisplay: function(data, config){
			var view = this;
		 	var $e = view.$el;
		 	view.study_id = data.study_id;
		},
		
		events: {
			"btap; .btnUser": btnUserMethod,
			
			"btap; .btnBack": btnBackMethod
		}

	});
	
	// --------- Event Methods --------- //
	function btnUserMethod(event){
		var view = this;
		brite.display("TestUserCreate",null,{sid:view.study_id});
	}
	
	function btnBackMethod(){
		var view = this;
		brite.display("StudyCreate",null,{sid:view.study_id});
	}
	// --------- /Event Methods --------- //
	

})();
