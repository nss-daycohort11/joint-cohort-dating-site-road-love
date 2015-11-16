define(["jquery"],
  function($){
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
  })