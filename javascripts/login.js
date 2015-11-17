define(function(require) {
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var f = require("firebase");
  var adduser = require("adduser");
  var _ = require("lodash");

var userName, userImage;
var userObject = {};



// Auth with facebook
$("#facebook").click(function() {
	console.log("click");
	var ref = new Firebase("https://roadlove.firebaseio.com/");
	ref.authWithOAuthPopup("facebook", function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } 
    else 
	    console.log("Authenticated successfully with payload:", authData);
	    console.log(authData.facebook.displayName);
	    // Getting name from Facebook
	    userName = authData.facebook.displayName;
	    // Getting image from Facebook
	    userImage = authData.facebook.profileImageURL;
	    // Adding name and image to userObject object
	    





      var userObject = {
	    	
	    	"user_name":userName,
	    	"user_image": userImage


  		};
  //inside else
  ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  _.findKey(snapshot,function(chr){
return this
  console.log(this );
  });

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
  




      
      console.log("userObject", userObject);
      // Sending userObject to Firebase via promises
      adduser(userObject)
        .then(function(addedUser) {
          // Removing log in when promise is successful
          $('.show').remove();
          // Showing additional needed profile information
          $('#myModal').modal('show');
          console.log("success");
        })
        .fail(function(error) { 
          console.log("It errored out", error);
  });
});
      });
  
});
  // console.log("userName", userName);













