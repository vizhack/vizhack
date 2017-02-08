$(document).ready(function() {
  $('.owl-carousel.default').owlCarousel({
      loop:false,
      margin:10,
      autoWidth:true,
      nav: true,
      navText: ["<div class='prev-arrow'></div>","<div class='next-arrow'></div>"],
      responsive:{
        0:{
          nav: false
        },
        768:{
        }
      }
  });

  $('.owl-carousel.video-carousel').owlCarousel({
      loop:false,
      margin:10,
      autoWidth:true,
      nav: true,
      navText: ["<div class='prev-arrow'></div>","<div class='next-arrow'></div>"],
      touchDrag: false,
      mouseDrag: false,
      responsive:{
        0:{
          items: 1
        },
        768:{
        }
      }
  });

  console.log('test');




  if($('.popup').length > 0) {
    $('.popup').fancybox({
          openEffect  : 'none',
          closeEffect : 'none',
            width   : '95%',
            height  : '95%',
          helpers : {
              media : {}
          }
    });
  }


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

  $('.sm-nav .mobile-nav .nav-item').on( "click", function() {
    $('.sm-nav').hide('slow');
  });

  $('.sm-nav-toggle').on( "click", function() {
      $('.sm-nav').show('slow');
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

  $(window).resize(function(){
      if($(window).width() < 500) {
        $('.video-carousel .owl-item, iframe, .owl-item .video, .owl-item .fb-video, .owl-item .fb-video > span').css({'width': '300px', 'height': '169px'});
      } else {
          $('.video-carousel .owl-item, iframe, .owl-item .video, .owl-item .fb-video, .owl-item .fb-video > span').css({'width': '500px', 'height': '281px'});
      }

      setTimeout(function(){
        $(".owl-carousel.video-carousel .owl-nav").removeClass('disabled');
      }, 1000);
  })
  $(".owl-carousel.video-carousel .owl-nav").removeClass('disabled');
  $(".owl-carousel.video-carousel .owl-nav div").on('click', function(){
    $(".owl-carousel.video-carousel .owl-nav").removeClass('disabled'); 
  });

    if($(window).width() < 500) {
      $('.video-carousel .owl-item, iframe, .owl-item .video, .owl-item .fb-video, .owl-item .fb-video > span').css({'width': '300px', 'height': '169px'});
    } else {
        $('.video-carousel .owl-item, iframe, .owl-item .video, .owl-item .fb-video, .owl-item .fb-video > span').css({'width': '500px', 'height': '281px'});
    }


  // $(document).scroll(function () {
  //   var x = $(this).scrollTop(),
  //       about = $('#about'),
  //       speakers = $('#speakers'),
  //       team = $('#team');

  //   if (x >= (about.offset().top - 50) && x < (about.offset().top + about.height() + 100)) {
  //       $('.navbar .nav-item span').css("color", "#fff");
  //   } else if (x >= (speakers.offset().top - 30) && x < (speakers.offset().top + speakers.height() - 50)) {
  //       $('.navbar .nav-item span').css("color", "#fff");
  //   }else if (x >= (team.offset().top - 30) && x < (team.offset().top + team.height())) {
  //       $('.navbar .nav-item span').css("color", "#fff");
  //   } else {
  //     $('.navbar .nav-item span').css("color", "#000000");
  //   }

  // });

});
