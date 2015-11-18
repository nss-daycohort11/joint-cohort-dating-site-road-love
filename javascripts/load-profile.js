define(function (require){
  var firebase = require("firebase");
  var $ = require("jquery");
  var templates = require("get-templates");
  var auth = require("auth-storage");
  var getUserData = require("getUserData");

  var myFirebaseRef = new Firebase("https://roadlove.firebaseio.com/");
  var userAuth = myFirebaseRef.getAuth();
    
    // Take snapshot of firebase object
  myFirebaseRef.child("users").once("value", function(snapshot) {
  var users = snapshot.val();
    
    // Create array of objects
    importUserArray = [];

    for (var key in users) {
      var userWithId = users[key];
      userWithId.key = key;
      importUserArray[importUserArray.length] = userWithId;

      if(userWithId.user_uid === userAuth.uid){
        console.log("user exists");
        auth.setKey(key);
      }
    }
    var profileRef = new Firebase("https://roadlove.firebaseio.com/users/" + auth.getKey());
    profileRef.on('value', function(snapshot){
      var userProfile = snapshot.val();
      console.log("userProfile", userProfile);

      var populatedTemplate = templates.profileTmpl({ user: userProfile });
      
      //Insert the DOM into the proper element
      $("#my-profile").html(populatedTemplate);
    });
  });
});