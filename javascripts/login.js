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
  
  console.log("yep");

  $("#facebook").click(function() {
    console.log("click");
    var ref = new Firebase("https://roadlove.firebaseio.com/");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        console.log(authData.facebook.displayName);
        var userName = authData.facebook.displayName;
        var userImage = authData.facebook.profileImageURL;
        var userId = authData.uid;
        auth.setUid(authData.uid);
        var userObject = {
          
          "user_name":userName,
          "user_image": userImage,
          "user_uid": userId

        };
        var userAuth = ref.getAuth();
        var usersArray = [];
        for (var key in ref) {
          var userObj = ref[key];
          userObj.key = key;
          usersArray[usersArray.length] = userObj;
          if(userObj.user_uid === userAuth.uid){
            console.log("user exists");
            auth.setKey(key);
          }
        console.log("userObject", userObject);
        adduser(userObject)
          .then(function(addedUser) {
            $('.show').remove();
            console.log("success");
          })
          .fail(function(error) { 
            console.log("It errored out", error);
        });
      }
    }
  });
});
});
 


