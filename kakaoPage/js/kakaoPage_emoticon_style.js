const ul =$(".slide-wrap>ul");
const lastImg = ul.children().last().clone();
ul.prepend(lastImg);
const firstImg = ul.children().eq(1).clone();
ul.append(firstImg);

const imgCount = ul.children().length;
const width = 800;
ul.css("width",(width*imgCount)+"px")

let imgNo = 1;
ul.css("transform","translateX("+(imgNo*-1200)+"px)");
let intervalId;

$(".prev").on("click",function(){
    if(imgNo !== 0){
        //인터벌함수 멈추기 ∵클릭해서 넘기는 것과 autoSlide 함수가 동시동작하게 않게
        clearInterval(intervalId);
        imgNo--;
        //★왼쪽으로 갈 때도 -를 씀
        const move = -imgNo*width;
        ul.css("transform","translateX("+move+"px)").css("transition-duration","1s");
        
        if(imgNo == 0) {
            //이미지 위치를 옮겨줌
            imgNo = imgCount-2;
            setTimeout(function(){
                const move = -imgNo*width;
                ul.css("transform","translateX("+move+"px)").css("transition-duration","0s");
            },1000);
        }
        //다시실행
        autoSlide();
    }    
});
$(".next").on("click",function(){
    if(imgNo != imgCount-1){
        clearInterval(intervalId);
        imgNo++;
    //이미지 크키만큼 ul이 왼쪽으로 이동
    const move = -imgNo*width;
    ul.css("transform","translateX("+move+"px)").css("transition-duration","1s");
    
    if(imgNo == imgCount-1){
        imgNo = 1;
        setTimeout(function(){
            const move = -imgNo*width;
            ul.css("transform","translateX("+move+"px)").css("transition-duration","0s");
        },1000);
    }
    autoSlide();
    }
});

function autoSlide(){
    intervalId = setInterval(function(){
        $(".next").click();
    },3*1000);
    
}
//함수를 선언하고 실행해야 동작함
autoSlide();

