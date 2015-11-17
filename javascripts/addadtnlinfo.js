 define(["jquery", "q", "firebase"], 
 function($, Q, F){

 	return function(adtnlInfoObject){

 			//set deffered object
		 	 var deferred = Q.defer();
		 	 //make ajax call
			 $.ajax({
			 	url: "https://roadlove.firebaseio.com/users.json",
		  		method:"POST",
		  		data: JSON.stringify(adtnlInfoObject)
		  		// XHR was successful
			 }).done(function(addedUserInfo){

			 	//resolve promise
			 	deferred.resolve(addedUserInfo);

			 })
			 	// XHR failed
			 .fail(function(xhr, status, error) {
			 	// Since the call failed, we have to reject the promise
      			deferred.reject(error);
      			// $("#add-failure").modal('show');


			 });
			 //return promise state
			 return deferred.promise;
			 
	 	};
 });