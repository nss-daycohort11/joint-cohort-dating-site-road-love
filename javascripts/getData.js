define(["q"],
	function(Q){



 return function() {
  var deferred = Q.defer();
  var myFirebaseRef = new Firebase("https://roadlove.firebaseio.com/")
  .done(function(data){
  	deferred.resolve(data);
  })
    myFirebaseRef.child("users").on("value", function(snapshot) {
    var users = snapshot.val()

})
  return deferred.promise;
  };
});