var app = app || {};
// --------- Entity Dao Registration --------- //
(function($){
	
	//register InMemoryDao
	app.StudyDao = brite.registerDao(new brite.InMemoryDaoHandler("Study"));
	
	app.TestUserDao = brite.registerDao(new brite.InMemoryDaoHandler("TestUser"));
	
	// add dao listeners
	brite.dao.onDao(function(event) {
		console.log("dao.onDao call : " + event.daoEvent.entityType + " - " + event.daoEvent.action);
	}, "namespace1"); 


})(jQuery);

