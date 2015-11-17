define(function (require){
  var firebase = require("firebase");
  var $ = require("jquery");
  var templates = require("get-templates");

  console.log("templates", templates);

  var myFirebaseRef = new Firebase("https://roadlove.firebaseio.com/");

      // Listen for when any changes occur to the "users" key
    myFirebaseRef.child("users").on("value", function(snapshot) {
      var users = snapshot.val();
      console.log("users", users); 

      

      
      var populatedTemplate = templates.profileTmpl(users);

      //Insert the DOM into the proper element
      $("#user-profile").html(populatedTemplate);
      
    });  
});