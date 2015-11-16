define(function(require) {
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var f = require("firebase")
console.log("yep");
// $(document).load(function(){
// 	console.log("yepers");
//         $('#login').modal('show');
//     });
$("#facebook").click(function() {
	console.log("click");
var ref = new Firebase("https://roadlove.firebaseio.com/");
ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
});

});