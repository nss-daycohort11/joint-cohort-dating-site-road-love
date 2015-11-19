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
  //When the login button is clicked...
  $("#facebook").click(function() {
  // Detect if already logged in
    var ref = new Firebase("https://roadlove.firebaseio.com/");
    var authData = ref.getAuth();
    console.log("authData", authData );
    if(authData === null) {

      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } 
        else {
          console.log("2" );
          //Code for what to execute with authorization begins here
          console.log("Authenticated successfully with payload:", authData);
        }
          var userName = authData.facebook.displayName;
          var userImage = authData.facebook.profileImageURL;
          var userId = authData.uid;
          auth.setUid(authData.uid);
          userObject = {
            
            "user_name":userName,
            "user_image": userImage,
            "user_uid": userId

          }; // closes object
        
      var userObj;
    //Checks if user is new user
          ref.child("users").on("value", function(snapshot) {
            var users = snapshot.val();
            console.log("3" );

            var usersArray = [];
            for (var key in users) {
              userObj = users[key];
              userObj.key = key;
              usersArray[usersArray.length] =  userObj;
             }

              //If user exists, set key.
      // console.log("userObj", userObj);
      //         if(userObj.user_uid === authData.uid ){
      //           console.log("Login Successful.  Welcome back.");
      //           auth.setKey(key);
      //           eventhandlers.closeModal();

      //           }      
      //         else {
      //           console.log("user does not exist");
                adduser(userObject)
                .then(function(addedUser) {
                  $('.show').remove();
                  console.log("success");
                  $('#myModal').modal('show');
                  auth.setKey(key);
                }
                .fail(function(error) { 
              console.log("It errored out", error);
            }));
          });
        
       });
     }
   });
  });
