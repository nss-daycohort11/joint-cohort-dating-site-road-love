define(function(require) {
  var q = require("q");
  var firebase = require("firebase");
  var auth = require("auth-storage");


  var usersRef = new Firebase("https://roadlove.firebaseio.com/users/");
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
            console.log("userObj.user_uid", userObj.user_uid)
            // console.log("user exists");
            auth.setKey(key);
          }else{
            // console.log("User does not exist");
          }
        }   
    });

    likesRef.on('value', function (snapshot) {
      var usersLikes = snapshot.val();
      console.log("usersLikes", usersLikes);
    }); 
      
    var likedKey = {};

    console.log("hello there");

  $(document).on('click', '.like', function(){
    var userRefKey = auth.getKey();
    console.log("like click");
    var likes = {};
    likes[$(this).val()] = true;
    console.log(likes);
      usersRef.child(userRefKey + "/likes").update(likes);
    })
    
 });





