$(function(){
    tab();
})
function tab(){
    $('.title li').eq(0).addClass("active")
    $('.title li').eq(0).siblings().removeClass("active")
    $('.attraction').hide();
    $('.experience').show();
    $('.title li').eq(0).click(function(){
      $('.title li').eq(0).addClass("active")
      $('.title li').eq(0).siblings().removeClass("active")
      $('.attraction').hide();
      $('.experience').show();
    })
    $('.title li').eq(1).click(function(){
      $('.title li').eq(1).addClass("active")
      $('.title li').eq(1).siblings().removeClass("active")
      $('.attraction').show();
      $('.experience').hide();
    })
  }
  