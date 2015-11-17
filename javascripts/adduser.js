 define(["jquery", "q"], 
 function($, Q){

 	return function(userObject){

 			//set deffered object
		 	 var deferred = Q.defer();
		 	 //make ajax call
			 $.ajax({
			 	url: "https://roadlove.firebaseio.com/users.json",
		  		method:"POST",
		  		data: JSON.stringify(userObject)
		  		// XHR was successful
			 }).done(function(addedUser){

			 	//resolve promise
			 	deferred.resolve(addedUser);

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