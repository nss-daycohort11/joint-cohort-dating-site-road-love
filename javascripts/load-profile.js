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


// I think this is the code snippet you need here...
    var arrayOfObjects = [];
    for (var key in users) {
          var userWithId = users[key];
          userWithId.key = key;
          arrayOfObjects[arrayOfObjects.length] = userWithId;
    };

    var populatedTemplate = templates.profileTmpl({ users: arrayOfObjects });

      //Insert the DOM into the proper element
    $("#my-profile").html(populatedTemplate);
      
  });  
});