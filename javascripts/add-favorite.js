define(function(require) {
  var q = require("q");
  var firebase = require("firebase");

  var userRef = new Firebase("https://roadlove.firebaseio.com/Users");
  console.log(userRef);

  function likeUser(userId) {
    var id = userRef.child("/likes").push();
    id.set(comment, function(err) {
      if (!err) {
        var name = id.key();
        userRef.child("/Users/likes/" + name).set(true);
      }
    });
  }

  // This function should return a promise
  // function() {
  //   $.ajax({
  //     url: "your favorites Firebase URL here",
  //     method: "POST"
  //   })
  //   .done(function(response) {
  //     // Resolve the promise
  //   }
  //   .fail(function(xhr, status, error) {
  //     // Reject the promise
  //   });
  // };
});