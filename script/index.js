let i = 0;
$(function(){
    //슬라이드
    // init();
    let intervalID = setInterval(slide2, 3000);
    // back();
    //배너
    let intervalID2 = setInterval(banner1, 5000)
    let intervalID3 = setInterval(banner2,5000)
    //메뉴탭
})

function slide2(){
    let currItem = $('#items li.top')
    let nextItem = currItem.next();
    if( !nextItem.length ) nextItem = $('#items li:first')
    currItem.removeClass("top")
    nextItem.addClass("top")
}

function banner1(){
    let currItem = $('.seal-items li.top');
    let nextItem = currItem.next();
    if(!nextItem.length) nextItem = $('.seal-items li:first')
    currItem.removeClass("top")
    nextItem.addClass("top")
}
function banner2(){
    let currid = $('.trip-items li.top')
    let nextid = currid.next();
    if(!nextid.length) nextid = $('.trip-items li:first')
    currid.removeClass("top");
    nextid.addClass("top");
}
  
