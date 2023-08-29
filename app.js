jQuery(document).ready(function($){
    $("#closemenu").click(function(){
        $(".mobilemneu").hide();
    })
    $(".hamburger").click(function(){
        $(".mobilemneu").show();
    });
    $(".btnforme").click(function(){
        $(".secondstep").show();
        $(".firststep").hide();
    });
    // Hide all steps except the first one
  
  // Step 1: Next button click event
  $(".btnforme").click(function() {
    $(this).siblings("#amount").hide();
    $(this).siblings("#diemail").show();
    $(this).siblings("#submitbtn").show();
    $(this).hide();
  });

  
//   // Step 2: Submit button click event
//   $("#submitForm").click(function() {
//     var selectedOption = $("#selectField").val();
//     var emailAddress = $("#diemailField").val();
    
//     // Perform form validation or data processing here
    
//     // For this example, just showing the selected option and email
//     alert("Selected Option: " + selectedOption + "\nEmail: " + emailAddress);
//   });
});
