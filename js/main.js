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


  $(document).scroll(function () {
    var x = $(this).scrollTop(),
        about = $('#about'),
        speakers = $('#speakers'),
        team = $('#team');

    if (x >= about.offset().top && x < (about.offset().top + about.height())) {
        $('.navbar .nav-item span').css("color", "#fff");
    } else if (x >= speakers.offset().top && x < (speakers.offset().top + speakers.height())) {
        $('.navbar .nav-item span').css("color", "#fff");
    }else if (x >= team.offset().top && x < (team.offset().top + team.height())) {
        $('.navbar .nav-item span').css("color", "#fff");
    } else {
      $('.navbar .nav-item span').css("color", "#000000");
    }

  });

});
