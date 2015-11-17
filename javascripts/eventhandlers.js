define(["jquery"],
  function($){
   // Event Handlers
       function myProfileView (){
          $("#main-page").hide();
          $("#my-profile").show();
          $("#other-profile").hide();   
          $("#profile-edit").hide();
          $("#see-the-world").show();     
           }

       function otherProfileView (){
          $("#main-page").hide();
          $("#my-profile").hide();
          $("#other-profile").show();        
       }

       function viewPeopleView (){
          $("#main-page").show();
          $("#my-profile").hide();
          $("#other-profile").hide();
          $("#see-the-world").hide();
          $("#profile-edit").show();        
       }

       $("#profile-edit").click(myProfileView);
       $("#see-the-world").click(viewPeopleView);
       $(".others-profile").click(otherProfileView);    
  })