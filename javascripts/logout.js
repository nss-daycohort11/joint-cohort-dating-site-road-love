define(function(require) {
var $ = require("jquery");
var f = require("firebase");

// Ref to firebase
	var ref = new Firebase("https://roadlove.firebaseio.com/");

$("#logout").click(function() {
		console.log("click");
  	ref.unauth();
  	console.log("you have logged out");
	  });
 }); 	