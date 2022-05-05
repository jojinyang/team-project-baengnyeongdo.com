$(function(){
    menu();
    //슬라이드
    // init();
    // back();
    //배너
    //메뉴탭
})
function menu(){
    $('.menu_bar').click(function(){
        $('.nav').slideDown();
        $('.icons').fadeIn();
        $('.menu_bar').hide();
        $('.menu_x').show();
    })
    $('.menu_x').click(function(){
        $('.nav').slideUp();
        $('.icons').fadeOut();
        $('.menu_bar').show();
        $('.menu_x').hide();
    })
  
}
