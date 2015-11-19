define(function(require) {
  var $ = require("jquery");
  var b = require("bootstrap");
  var addadtnlinfo = require("addadtnlinfo");
  var auth = require("auth-storage");


  // $(document).on('click', '#save', function(){
$("#save").click(function() {
	var userKey = auth.getKey();
	
	console.log("userkey", userKey );
  	// var userRef = new Firebase("https://roadlove.firebaseio.com/users/" + userKey );
  	var userRef = new Firebase("https://roadlove.firebaseio.com/users/" + userKey);


  	

	console.log("save click");
	var age = $("#age").val();
	// console.log("age", age);
	var state = $("#state").val();
	// console.log("state", state);
	var city = $("#city").val();
	// console.log("city", city);
	var zip = $("#zip").val();
	// console.log("zip", zip);
	var rv = $("#rv").val();
	// console.log("rv", rv);
	var gender = $("#myselect option:selected").text();
	// console.log("gender", gender);
	var bio = $("#bio").val();
	// console.log("bio", bio);

	userRef.update({

		age: age,
		homelocation: {
			city: city,
			state: state
		},
		zip: zip,
		rv: rv,
		gender: gender,
		bio: bio 

	});

		// console.log("adtnlInfoObject", adtnlInfoObject);
  // 		// Sending userObject to Firebase via promises
  // 		addadtnlinfo(adtnlInfoObject)
  // 			.then(function(addadtnlinfo) {
  // 				console.log("successful save");
  // 			})
	 //  		.fail(function(error) {	
		//     		console.log("It errored out", error);
		// });

});
});