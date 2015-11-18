require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(

  ["dependencies", "firebase", "login", "add-favorite", "get-templates", "load-profile", "adduser", "auth-storage"], 
  function(dependencies, firebase, login, addFavorite, templates, profile, adduser, auth) {

    // Import Firebase user object
  var importUserArray = [];
  var myFirebaseRef = new Firebase("https://roadlove.firebaseio.com/");
  var userAuth = myFirebaseRef.getAuth();
    
    // Take snapshot of firebase object
  myFirebaseRef.child("users").once("value", function(snapshot) {
    var users = snapshot.val();
    
    // Create array of objects
    importUserArray = [];

    for (var key in users) {
      var userWithId = users[key];
      userWithId.key = key;
      importUserArray[importUserArray.length] = userWithId;

      if(userWithId.user_uid === userAuth.uid){
        console.log("user exists");
        auth.setKey(key);
      }
    }
      console.log("importUserArray", importUserArray);
          

    // Prep object to be passed into hbs in case of edits
    allUsersObject = { users: importUserArray };
    var readyTemplate = templates.landingTmpl({ users: importUserArray });
     
    $(".grid").html(readyTemplate);
      // Create copy of original array for click back to main screen.
      originalUserArray = importUserArray.slice();
 

  }); 
});

