$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      autoWidth:true,
      nav: true,
      navText: ["<div class='prev-arrow'></div>","<div class='next-arrow'></div>"],
      responsive:{
        0:{
          nav: false
        },
        1000:{
        }
    }
  });

  $('.lang-wrap .en-switch').on("click", function() {
      $('.ka-switch').removeClass('active');
      $('.en-switch').addClass('active');
      $('.ka').hide();
      $('.en').show();
  });

  $('.lang-wrap .ka-switch').on( "click", function() {
      $('.en-switch').removeClass('active');
      $('.ka-switch').addClass('active');
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
    // if( scroll > 0 ) {
    //   $('.navbar').addClass("scrolled");
    // } else {
    //   $('.navbar').removeClass("scrolled");
    // }

  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  $(document).scroll(function () {
    var x = $(this).scrollTop(),
        about = $('#about'),
        speakers = $('#speakers'),
        team = $('#team');

    if (x >= (about.offset().top - 50) && x < (about.offset().top + about.height() + 100)) {
        $('.navbar .nav-item span').css("color", "#fff");
    } else if (x >= (speakers.offset().top - 30) && x < (speakers.offset().top + speakers.height() - 50)) {
        $('.navbar .nav-item span').css("color", "#fff");
    }else if (x >= (team.offset().top - 30) && x < (team.offset().top + team.height())) {
        $('.navbar .nav-item span').css("color", "#fff");
    } else {
      $('.navbar .nav-item span').css("color", "#000000");
    }

  });

});
