// define(function(require) {

// var auth = require("auth-storage");
define(
["auth-storage", "firebase", "jquery"],
function (auth, firebase, $){

 
  // Checking page load
  console.log("login.js loaded");

  // Ref to firebase
  var ref = new Firebase("https://roadlove.firebaseio.com/");

  
    $("#facebook").click(function() {
      console.log("click");
      var authData = ref.getAuth();
      
      // If no authData exists
      if (authData !== null){ 
        
        // Getting auth from Facebook
        ref.authWithOAuthPopup("facebook", function(error, authData) {
      
          // Setting uid to newuid
          auth.setUid(authData.uid);
          // Declaring variables for real time snapshot
          var usersref = ref.child("users");
          var userExists = false;
          var userName = authData.facebook.displayName;
          var userImage = authData.facebook.profileImageURL;
          var userId = authData.uid;

          //Using real time snapshot because it kept adding users each time we signed in
          usersref.once("value", function(dataSnapshot) {
            dataSnapshot.forEach(function(childSnapshot) {
              //If facebook uid matches, then user already exits
              console.log("childSnapshot.val().uid",childSnapshot.val().uid);
              console.log("authData.uid",authData.uid );
              if (childSnapshot.val().uid === authData.uid) {
                userExists = true;
                alert("Welcome back");
                $('.show').remove();
                }
              });
              //If doesn't match, then push uid, image, displayname to user in firebase
                if (userExists === false) {
                    console.log("push to firebase attempted");
                    usersref.push({

                        "user_name":userName,
                    "user_image": userImage,
                    "user_uid": userId
                            
                    });
                    $('.show').remove();
                    console.log("success");
                    $('#myModal').modal('show');
                }   
          });
      });
    } else {
            auth.setUid(authData.uid);
            // window.location.assign("home.html");
            // profileInputFields.profileInputDisplay();
            console.log("hey");
            $('.show').remove();

        } 
  });

 });  
  // $("#logout").click(function()
  //  console.log("click");
 //   ref.unauth();















  
//   console.log("yep");



//   $("#facebook").click(function() {
//     console.log("click");
//     // Ref to firebase
//     var ref = new Firebase("https://roadlove.firebaseio.com/");
//     // Getting auth from Facebook
//     ref.authWithOAuthPopup("facebook", function(error, authData) {
//       if(authData){
//         auth.getUid();
//       }
//       else if (error) {
//         console.log("Login Failed!", error);
//       } else {
//         console.log("Authenticated successfully with payload:", authData);
//         console.log(authData.facebook.displayName);
//         var userName = authData.facebook.displayName;
//         var userImage = authData.facebook.profileImageURL;
//         var userId = authData.uid;
//         auth.setUid(authData.uid);
//         var userObject = {
          
//           "user_name":userName,
//           "user_image": userImage,
//           "user_uid": userId

//         };
//       }

//     })
//       ref.child("users").on("value", function(snapshot) {
//       var users = snapshot.val();
//       console.log("users", users);

//         var userAuth = ref.getAuth();
//         var usersArray = [];
//         for (var key in users) {
//           var userObj = users[key];
//           // console.log("userObj", userObj);
//           userObj.key = key;
//           // console.log("key", userObj.key);
//           usersArray[usersArray.length] =  userObj;
//         console.log("userObj", userObj);
//         console.log("userObj.user_uid", userObj.user_uid);
//             console.log("userAuth.uid", userAuth.uid);


//           if(userObj.user_uid === userAuth.uid){
//             console.log("userObj.user_uid", userObj.user_uid);
//             console.log("userAuth.uid", userAuth.uid);
//             console.log("user exists");
//             auth.setKey(key);
//           }
//           else{
//             console.log("user does not exist");
//           }
//         }       
//           console.log("userObject", userObject);
//           adduser(userObject)
//             .then(function(addedUser) {
//               $('.show').remove();
//               console.log("success");
//               $('#myModal').modal('show');
//             })
//             .fail(function(error) { 
//               console.log("It errored out", error);
//            });
//      });
//   });
// });

 



