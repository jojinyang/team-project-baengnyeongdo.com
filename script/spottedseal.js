$(function(){
  slide();
  tab();
  // let intervalID = setInterval(slide , 3000)
  // next();
})
// function slide(){
//   let currItem = $("#items li.top")
//   let nextItem = currItem.next();
//   if(!nextItem.length) currItem = $("#items li:first");
//   currItem.removeClass("top")
//   nextItem.addClass("top")
// }
$('.btns li').eq(0).css({
  background : '#0d69af'
})
function slide(){
  $(".rihgt").on('click',function(){
    let currItem = $("#items li.top")
    let nextItem = currItem.next();
    if(!nextItem.length) nextItem = $("#items li:first");
    currItem.removeClass("top")
    nextItem.addClass("top")
    let idx = $("#items li.top").index()
    console.log(idx);
    $('.btns li').eq(idx).css({
      background : '#0d69af'
    })
    $('.btns li').eq(idx).siblings().css({
      background : '#fff'
    })
  })
  $(".left").on('click',function(){
    let nowItem = $("#items li.top")
    let prevItem = nowItem.prev();
    if(!prevItem.length) prevItem = $("#items li:last");
    nowItem.removeClass("top")
    prevItem.addClass("top")
    let idx = $("#items li.top").index()
    console.log(idx);
    $('.btns li').eq(idx).css({
      background : '#0d69af'
    })
    $('.btns li').eq(idx).siblings().css({
      background : '#fff'
    })
  })
}
function tab(){
  $('.title li').eq(0).addClass("active")
  $('.title li').eq(0).siblings().removeClass("active")
  $('.seal-travel').hide();
  $('.contents').show();
  $('.title li').eq(0).click(function(){
    $('.title li').eq(0).addClass("active")
    $('.title li').eq(0).siblings().removeClass("active")
    $('.seal-travel').hide();
    $('.contents').show();
  })
  $('.title li').eq(1).click(function(){
    $('.title li').eq(1).addClass("active")
    $('.title li').eq(1).siblings().removeClass("active")
    $('.seal-travel').show();
    $('.contents').hide();
  })
}




