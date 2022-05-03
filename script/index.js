$(function(){
    //슬라이드
    init();
    let intervalID = setInterval(slide, 3000);
    //배너
    let intervalID2 = setInterval(banner, 5000)
    //메뉴탭
    //menu();
})
i = 0;
function init(){
    $('.btns li').eq(0).css({
        background : '#0d69af'  
    })
}
function slide(){
    if(i >= 5){
        i=0
    };
    let Pos = -1200 * i;
    $('#items').css({
        marginLeft : Pos
    });
    pager(i);
    i++;
}
function pager(num) {
    $('.btns li').eq(num).css({
        background : '#0d69af'  
    })
    $('.btns li').eq(num).siblings().css({
        background : '#fff'
    })
}
function banner(){
    let currItem = $('.seal-items li.top');
    let nextItem = currItem.next();
    if(!nextItem.length) nextItem = $('.seal-items li:first')
    currItem.removeClass("top")
    nextItem.addClass("top")

}