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

   // Event Handlers

       
       function myProfileView (){
          $("#main-page").hide();
          $("#my-profile").show();
          $("#other-profile").hide();        
           }
       function otherProfileView (){
          $("#main-page").hide();
          $("#my-profile").hide();
          $("#other-profile").show();        
       }

       $("#profile-edit").click(myProfileView);
       $(".others-profile").click(otherProfileView);      




       // Like Potential
       // Favorite Potential






    
  }
);
