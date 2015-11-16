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

     // Take snapshot of firebase object

     // Create array of objects

     // Prep object to be passed into hbs in case of edits

     // Create variable to store "modifiedUserObject"

     // Create editted JSON file

     // Flash update back to Firebase

  




       // Like Potential
       // Favorite Potential






    
  }
);
