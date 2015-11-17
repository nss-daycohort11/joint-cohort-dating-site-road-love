define(function(require) {
  var $ = require("jquery");
  var b = require("bootstrap");
  var addadtnlinfo = require("addadtnlinfo");


$("#save").click(function() {
	console.log("save click");
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

	var adtnlInfoObject = {

		"age": age,
		"homelocation.city": city,
		"homelocation.state": state,
		"zip": zip,
		"rv": rv,
		"gender": gender,
		"bio": bio 

	}
	console.log("adtnlInfoObject", adtnlInfoObject);
  		// Sending userObject to Firebase via promises
  		addadtnlinfo(adtnlInfoObject)
  			.then(function(addedUser) {

  			})
	  		.fail(function(error) {	
		    		console.log("It errored out", error);
		});

});
});