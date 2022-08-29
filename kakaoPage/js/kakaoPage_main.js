const imgNews = $(".product-list a img");
imgNews.mouseenter(function(){
    const imgNew = $(".product-list a img");
    const index = imgNew.index(this);
    if(index==0 || index==1 || index==6){
        imgNew.eq(index).attr('src','img/kakaoicon-list'+index+'-2.png');
    }else{
        imgNew.eq(index).attr('src','img/kakaoicon-list'+index+'-2.gif');
    }
    const spanNew = $(".product-list a span");
    spanNew.eq(index).css("text-decoration","underline").css("font-weight","bold");
});
imgNews.mouseleave(function(){
    const imgNew = $(".product-list a img");
    const spanNew = $(".product-list a span");
    const index = imgNew.index(this);
    imgNew.eq(index).attr('src','img/kakaoicon-list'+index+'.png');
    spanNew.eq(index).css("text-decoration","").css("font-weight","");
});

const textNewLeft = $(".popul-list-left-name");
textNewLeft.mouseenter(function(){
    const textNew = $(".popul-list-left-name");
    const spanNew = $(".popul-list-left-names");
    const index = textNew.index(this);
    spanNew.eq(index).css("text-decoration","underline").css("font-weight","bold");
});
const textNewRight = $(".popul-list-right-name");
textNewRight.mouseenter(function(){
    const textNew = $(".popul-list-right-name");
    const spanNew = $(".popul-list-right-names");
    const index = textNew.index(this);
    spanNew.eq(index).css("text-decoration","underline").css("font-weight","bold");
});
textNewLeft.mouseleave(function(){
    const textNew = $(".popul-list-left-name");
    const spanNew = $(".popul-list-left-names");
    const index = textNew.index(this);
    spanNew.eq(index).css("text-decoration","none").css("font-weight","500");
})
textNewRight.mouseleave(function(){
    const textNew = $(".popul-list-right-name");
    const spanNew = $(".popul-list-right-names");
    const index = textNew.index(this);
    spanNew.eq(index).css("text-decoration","none").css("font-weight","500");
});




const imgPopulLeft = $(".popul-list-left-icon img");
const imgPopulRight = $(".popul-list-right-icon img");
imgPopulLeft.mouseenter(function(){
    const imgPopulLeft = $(".popul-list-left-icon img");
    const index = imgPopulLeft.index(this);
    const textPopulLeft = $(".popul-list-left-names");
    const leftNameSub = $(".left-name-sub");
    console.log(index);
    if(index==0 || index==2){
        imgPopulLeft.eq(index).attr('src','img/populImo'+index+'-2.png');
    }else{
        imgPopulLeft.eq(index).attr('src','img/populImo'+index+'-2.gif');
    }
    textPopulLeft.eq(index).css("text-decoration","underline").css("font-weight","bold");
    leftNameSub.eq(index).css("text-decoration","none").css("font-weight","500");
});
imgPopulLeft.mouseleave(function(){
    const imgPopulLeft = $(".popul-list-left-icon img");
    const index = imgPopulLeft.index(this);
    const textPopulLeft = $(".popul-list-left-names");
    imgPopulLeft.eq(index).attr('src','img/populImo'+index+'.png');
    textPopulLeft.eq(index).css("text-decoration","none").css("font-weight","500");
});

imgPopulRight.mouseenter(function(){
    const imgPopulRight = $(".popul-list-right-icon img");
    const index = imgPopulRight.index(this);
    const textPopulRight = $(".popul-list-right-names");
    const rightNameSub = $(".right-name-sub");
    if(index==0|| index==2){
        imgPopulRight.eq(index).attr('src','img/populImo'+Number(index+5)+'-2.gif');
    }else{
        imgPopulRight.eq(index).attr('src','img/populImo'+Number(index+5)+'-2.png');
    }
    textPopulRight.eq(index).css("text-decoration","underline").css("font-weight","bold");
    rightNameSub.eq(index).css("text-decoration","none").css("font-weight","500");
});
imgPopulRight.mouseleave(function(){
    const imgPopulRight = $(".popul-list-right-icon img");
    const index = imgPopulRight.index(this);
    const textPopulRight = $(".popul-list-right-names");
    imgPopulRight.eq(index).attr('src','img/populImo'+Number(index+5)+'.png');
    textPopulRight.eq(index).css("text-decoration","none").css("font-weight","500");
});
