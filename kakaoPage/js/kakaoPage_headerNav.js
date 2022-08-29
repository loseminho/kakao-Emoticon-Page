const headerNav = $(".header-bottom ul a li");

// headerNav.mouseenter(function(){
//     headerNav.css("color","#808080").css("border-bottom","2px solid lightgray").css("font-size","16px").css("font-weight","500");
//     const index = headerNav.index(this);
//     headerNav.eq(index).css("color","black").css("border-bottom","2px solid black").css("font-size","1.1em").css("font-weight","900");
// });
// headerNav.mouseleave(function(){
//     headerNav.css("color","#808080").css("border-bottom","2px solid lightgray").css("font-size","16px").css("font-weight","500");
// });
headerNav.click(function(){
    headerNav.css("color","#808080").css("border-bottom","2px solid lightgray").css("font-size","16px").css("font-weight","500");
    const index = headerNav.index(this);
    headerNav.eq(index).css("color","black").css("border-bottom","2px solid black").css("font-size","1.1em").css("font-weight","900");
    
});
