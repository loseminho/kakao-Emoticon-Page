const li = $(".list_new>li");
const imgDefault = $(".img_default");
const imgHover = $(".img_hover");
const btnGrpshare = $(".btn_grpshare")
const txtTit = $(".txt_tit");
const txtAuthor = $(".txt_author");

li.on("mouseenter", function(){
    $(this).find(imgDefault).css("display","none");
    $(this).find(imgHover).css("display","block");
    $(this).find(btnGrpshare).css("display","block");
    // $(this).find(txtTit).css("font-size","1.3em");
    // $(this).find(txtTit).css("font-weight","900");
    $(this).find(txtTit).css("text-decoration","underline");
    
});

li.on("mouseleave", function(){
    $(this).find(imgDefault).css("display","block");
    $(this).find(imgHover).css("display","none");
    $(this).find(btnGrpshare).css("display","none");
    // $(this).find(txtTit).css("font-size","1em");
    // $(this).find(txtTit).css("font-weight","600");
    $(this).find(txtTit).css("text-decoration","none");
});

txtTit.each(function(){
    if($(this).text().length > 15){
        $(this).html($(this).text().substr(0,15)+"...");
    }
});