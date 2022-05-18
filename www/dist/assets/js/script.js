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

