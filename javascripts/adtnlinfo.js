define(function(require) {
  var $ = require("jquery");
  var b = require("bootstrap");
  // var addadtnlinfo = require("addadtnlinfo");
  // var auth = require("auth-storage");

// Ref to firebase
var ref = new Firebase("https://roadlove.firebaseio.com/");

// Getting uKey
var userKey;
// Setting reference to Firebase object
var usersFirebase = ref.child("users");


$("#save").click(function() {

	console.log("save click");
	// auth.getKey()	
	// console.log("userKey", userKey);
	var age = $("#age").val();
	console.log("age", age);
	var state = $("#state").val();
	console.log("state", state);
	var city = $("#city").val();
	console.log("city", city);
	var zip = $("#zip").val();
	console.log("zip", zip);
	var rv = $("#rv").val();
	console.log("rv", rv);
	var gender = $("#myselect option:selected").text();
	console.log("gender", gender);
	var bio = $("#bio").val();
	console.log("bio", bio);

	var adtnlInfoObject = usersFirebase.child();
	// usersFirebase.child("userKey");
// hopperRef.update({
//   "nickname": "Amazing Grace"
// });

	adtnlInfoObject.update({

		"age": age,
		"city": city,
		"state": state,
		"zip": zip,
		"rv": rv,
		"gender": gender,
		"bio": bio 

	});

	// console.log("adtnlInfoObject", adtnlInfoObject);
  		// Sending userObject to Firebase via promises
  // 		addadtnlinfo(adtnlInfoObject)
  // 			.then(function(addedUser) {

  // 			})
	 //  		.fail(function(error) {	
		//     		console.log("It errored out", error);
		// });

});
});