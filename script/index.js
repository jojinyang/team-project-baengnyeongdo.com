$(function(){
    //슬라이드
    //배너
    //메뉴탭
    menu();
})
function menu(){
    $("#nav-pop").hide();
    $('.nav').click(function(){
        $("#nav-pop").slideDown();
    })
    $('.nav-x').click(function(){
        $("#nav-pop").slideUp();
    })
}