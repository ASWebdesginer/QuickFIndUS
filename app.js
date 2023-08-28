jQuery(document).ready(function($){
    $("#closemenu").click(function(){
        $(".mobilemneu").hide();
    })
    $(".hamburger").click(function(){
        $(".mobilemneu").show();
    })
})