

$(".share").next().on("click",function(){
   
    $(this).hide();
    $(".red-heart").show();
});

$(".red-heart").on("click",function(){
    $(this).hide();
    $(this).prev().show();
})

$(".guide-icon1").on("click",function(){
    $(this).toggleClass("active");
    $(".guide1-open").slideToggle();
});

$(".product-wrap").on("click",function(){
    $(".modal-wrap").css("display","flex");
});

$(".close").on("click",function(){
    $(".modal-wrap").css("display","none");
});



$(".check-icon").on("click",function(){
    $(this).toggleClass("be-yellow");
    $("#confirm").toggleClass("bg-yellow");
    
    
    
});


