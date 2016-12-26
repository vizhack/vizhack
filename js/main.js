$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoWidth:true,
      nav: true,
      navText: ["<div class='prev-arrow'></div>","<div class='next-arrow'></div>"]
  });

  $('.lang-wrap .en-switch').on("click", function() {
      $('.ka').hide();
      $('.en').show();
  });

  $('.lang-wrap .ka-switch').on( "click", function() {
      $('.en').hide();
      $('.ka').show();
  });

  $('.navbar').on({
    mouseenter: function () {
      if(scroll > 0)
        $('.navbar').removeClass("scrolled");
    },
    mouseleave: function () {
      if(scroll = 0)
        $('.navbar').addClass("scrolled");
    }
  });

  var scroll = 0;

  $(window).scroll(function (event) {
    scroll = $(window).scrollTop();
    if( scroll > 0 ) {
      $('.navbar').addClass("scrolled");
    } else {
      $('.navbar').removeClass("scrolled");
    }
  });

});
