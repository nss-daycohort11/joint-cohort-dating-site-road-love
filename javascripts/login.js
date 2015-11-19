define(function(require) {
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var f = require("firebase");
  var adduser = require("adduser");
  var _ = require("lodash");
  var auth = require("auth-storage");
  var userName, userImage;
  var userObject = {};
  var auth = require("auth-storage");
 
  // Checking page load
  console.log("yep");

	// Ref to firebase
	var ref = new Firebase("https://roadlove.firebaseio.com/");

	
  	$("#facebook").click(function() {
	    console.log("click");
	    var authData = ref.getAuth();
	    console.log("authData", authData);
    	// If no authData exists
    	if (authData === null){ 
	    	console.log("authData", authData);
    		// Getting auth from Facebook
	    	ref.authWithOAuthPopup("facebook", function(error, authData) {
	    		console.log("authData", authData);
		    	// Setting uid to newuid
		    	auth.setUid(authData.uid);
		    	// Declaring variables for real time snapshot
		    	var usersFirebase = ref.child("users");
		        var userExists = false;
		        var userName = authData.facebook.displayName;
		        var userImage = authData.facebook.profileImageURL;
		        var userId = authData.uid;

		        //Using real time snapshot because it kept adding users each time we signed in
		        usersFirebase.once("value", function(dataSnapshot) {
		            dataSnapshot.forEach(function(childSnapshot) {
		                //If facebook uid matches, then user already exits
		                if (childSnapshot.val().uid === authData.uid) {
		                    userExists = true;
		                    alert("Welcome back");
		                    $('.show').remove();
		                }
		            });
		        	//If doesn't match, then push uid, image, displayname to user in firebase
		            if (userExists === false) {
		                usersFirebase.push({

		                    "user_name":userName,
		          			"user_image": userImage,
		          			"user_uid": userId
		                        
		                });
		                $('.show').remove();
		              	console.log("success");
		              	$('#myModal').modal('show');
            		}  	
  				});
			});
		} else {
            auth.setUid(authData.uid);
            // window.location.assign("home.html");
            // profileInputFields.profileInputDisplay();
            console.log("hey");
            $('.show').remove();
        }	
	});
});		


