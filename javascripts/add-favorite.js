define(function(require) {
  var q = require("q");
  var firebase = require("firebase");
  var auth = require("auth-storage");


  var usersRef = new Firebase("https://roadlove.firebaseio.com/users");
  var userAuth = usersRef.getAuth();
    console.log("userAuth", userAuth);

  var userKey = auth.getUid();
  console.log("userKey", userKey);
  var likesRef = new Firebase("https://roadlove.firebaseio.com/users/" + userKey + "/likes/");

    var usersArray = [];
    var ref = new Firebase("https://roadlove.firebaseio.com");

    ref.child("users").on("value", function(snapshot) {
      var users = snapshot.val();
      console.log("users", users);

      var likes = [];
      usersArray = [];
        for (var key in users) {
          var userObj = users[key];
          userObj.key = key;
          userObj.likes = likes;
          usersArray[usersArray.length] = userObj;
          if(userObj.user_uid === userAuth.uid){
            console.log("user exists");
            auth.setUid(key);
          }else{
            console.log("User does not exist");
          }
        }
               likesRef.on('value', function (snapshot) {
            var usersLikes = snapshot.val();
            console.log("usersLikes", usersLikes);
          });    
    });

  $(document).on('click', '#like', function(likeUserData){
    console.log("like click");
      usersRef.child(userKey + "/likes/").push(likeUserData = true);
    });
 });




