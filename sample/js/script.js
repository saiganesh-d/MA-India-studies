$(document).ready(function(){
  
  // Faculty Carousel
  $(".faculty-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["&#10094;", "&#10095;"],
    dots: false,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 }
    }
  });

  // What's in it for you Carousel
  $(".whats-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  // What will you gain Carousel
  $(".what-gain-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4500,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 }
    }
  });


  // Recognitions Carousel for mobile
  const $reconBadge = $('.recognitions-badges');
  function updateRecognitions() {
    if(window.innerWidth <= 768) {
      if(!$reconBadge.hasClass('owl-carousel')) {
        $reconBadge.addClass('owl-carousel owl-theme').owlCarousel({
          items: 1, 
          margin: 20, 
          loop: true, 
          nav: false, 
          dots: true, 
          autoplay: true,
          autoplayTimeout: 3500
        });
      }
    } else {
      if($reconBadge.hasClass('owl-carousel')) {
        $reconBadge.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme');
      }
    }
  }
  updateRecognitions();
  $(window).on('resize', updateRecognitions);

  // Smooth scroll for Enquire buttons
  $('a[href^="#enquire"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
  });

});
