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
  $(".formsect").find("form").submit(function(e){
    e.preventDefault();
     var loanamount=$(this).find("select").val();
     var emailofuser=$(this).find("#diemail").val();
     window.location.href=`/Form.html?loanAmount={{${loanamount}}}&email={{${emailofuser}}}`;
  })

});
