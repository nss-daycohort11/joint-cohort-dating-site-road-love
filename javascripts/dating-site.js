require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

require(
  ["dependencies"], 
  function(_$_) {

     // Import Firebase user object

var myFirebaseRef = new Firebase("https://https://roadlove.firebaseio.com/");
    
     // Take snapshot of firebase object
  myFirebaseRef.child("users").on("value", function(snapshot) {
    var users = snapshot.val();
    
     // Create array of objects
    importUserArray = [];
        for (var key in users) {
            var userWithId = users[key];
            userWithId.key = key;
            importUserArray[importUserArray.length] = userWithId;
          };
    
     // Prep object to be passed into hbs in case of edits
    allUsersObject = { users: importSongsArray };
    
    // Create copy of original array for click back to main screen.
    originalUserArray = importUserArray.slice();
    
     // Create variable to store "modifiedUserObject"

     // Create editted JSON file

     // Flash update back to Firebase






  




       





    
  }
);
