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
  
  $("#facebook").click(function() {
          // Detect if already logged in
    var ref = new Firebase("https://roadlove.firebaseio.com/");
    var authData = ref.getAuth();

    if(authData === null) {
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          var userName = authData.facebook.displayName;
          var userImage = authData.facebook.profileImageURL;
          var userId = authData.uid;
          auth.setUid(authData.uid);

          var userObject = {
            
            "user_name":userName,
            "user_image": userImage,
            "user_uid": userId

          };
        }
      });
    }
      ref.child("users").on("value", function(snapshot) {
      var users = snapshot.val();

        var userAuth = ref.getAuth();
        var usersArray = [];
        for (var key in users) {
          var userObj = users[key];
          userObj.key = key;
          usersArray[usersArray.length] =  userObj;

          if(userObj.user_uid === userAuth.uid){
            console.log("user exists");
            auth.setKey(key);
          }
          else{
            console.log("user does not exist");
          }
        }       
          adduser(userObject)
            .then(function(addedUser) {
              $('.show').remove();
              console.log("success");
              $('#myModal').modal('show');
              auth.setKey(key);
            })
            .fail(function(error) { 
              console.log("It errored out", error);
           });
     });
  });
});

 


