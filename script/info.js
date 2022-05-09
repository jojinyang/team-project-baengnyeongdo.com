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
    $('.title li').eq(0).click(function(){
      $('.title li').eq(0).addClass("active")
      $('.title li').eq(0).siblings().removeClass("active")
    })
    $('.title li').eq(1).click(function(){
      $('.title li').eq(1).addClass("active")
      $('.title li').eq(1).siblings().removeClass("active")
    })
  }
// 지도
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.9590027, 124.6653814), //지도의 중심좌표.
	level: 9 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var markerPosition  = new kakao.maps.LatLng(37.9590027, 124.6653814); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


var container = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.4594575, 126.6256454), //지도의 중심좌표.
	level: 5 //지도의 레벨(확대, 축소 정도)
};
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var markerPosition  = new kakao.maps.LatLng(37.4594575, 126.6256454); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

  
  
  
  
  