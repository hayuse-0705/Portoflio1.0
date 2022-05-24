$(window).bind("unload",function(){});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

$('#humberger').on('click', function(){
    if($('#humberger').hasClass('.hum_active')){
        $(this).children('.hum_top').removeClass('hum_top_active');
        $(this).children('.hum_mid').removeClass('hum_mid_active');
        $(this).children('.hum_bot').removeClass('hum_bot_active');
        $('.menu').removeClass("menu_open");
        $(this).removeClass('.hum_active');
    }else{
        $(this).children('.hum_top').addClass('hum_top_active');
        $(this).children('.hum_mid').addClass('hum_mid_active');
        $(this).children('.hum_bot').addClass('hum_bot_active');
        $('.menu').addClass("menu_open");
        $(this).addClass('.hum_active');
    }
});

$(function () {
  $(".slick-arrow").click(function () {
    videoControl("pauseVideo");
    function videoControl(action) {
      var $playerWindow = $("iframe")[0].contentWindow;
      $playerWindow.postMessage(
        '{"event":"command","func":"' + action + '","args":""}',
        "*"
      );
    }
  });
});

$('.slick-arrow').click(function(){
  window.location.href = '#';
});

$("a").on('click',function(event){
  event.preventDefault();
  var linkUrl = $(this).attr('href');
  
  // ここにリンク先への遷移直前に実行する内容を記述
  $('.logo-load').addClass('fade-out');
  $('.text-load').addClass('text-out');
  $('.text-load').children('a').addClass('text-out');
  $('.text-load-sub').addClass('text-out');
  $('.text-load-sub').children('a').addClass('text-out');
  $('.text-load-sub').addClass('box-out');
  $('#humberger').removeClass('.hum_active');
  $('#humberger').children('.hum_top').removeClass('hum_top_active');
  $('#humberger').children('.hum_mid').removeClass('hum_mid_active');
  $('#humberger').children('.hum_bot').removeClass('hum_bot_active');
  $('.menu').removeClass("menu_open");
  

  function action() {
    location.href = linkUrl;

    // ここにリンク先への移動直後に実行する内容を記述
  }
  setTimeout(action,1000);
});