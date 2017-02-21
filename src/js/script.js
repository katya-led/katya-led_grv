$(document).ready(function(){


// main slick
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav',
    cssEase: 'ease-in-out',
    speed: 400,
    accessibility: false
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    cssEase: 'ease-in-out',
    speed: 400,
    centerMode: true,
    accessibility: false,
    arrows: false,
    centerPadding: '100px',
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 321,
      settings: "unslick"
 
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


//reviews
function mySlick() {

  $('.reviews-slide').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: "unslick"
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

}
// при ресайзе включается слик 
mySlick();

$(window).resize(function() {
  var winWidth = $(window).width();
  if ( winWidth > 1199 ) {
    mySlick();
  }
});


//offers
  $('.offers-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
  });


//main tabs
  var tabs = document.querySelectorAll('.rest-type-switcher__tabs-nav .rest-type-switcher__tabs-nav-item a');
  var divs = document.querySelectorAll('.rest-type-switcher__type .rest-type-switcher__type-item');

  function changeTab(event) {
    event.preventDefault();

   for (var i=0; i<tabs.length; i++) {
    tabs[i].parentNode.classList.remove('is-active');
    }

    event.target.parentNode.classList.add('is-active');

    for (var i=0; i<divs.length; i++) {
      divs[i].classList.remove('is-active');
    }

    var link = event.target.getAttribute('href');
    document.querySelector(link).classList.add('is-active');
  }


  for (var i=0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', changeTab);
  }


//page-header hamburger
$('#menutrigger').click(function(e) {
  e.preventDefault();
  $('#menudown').toggle();
});

$(window).resize(function() {
  var winWidth = $(window).width();
  if ( winWidth > 1199 ) {
    $('#menudown').fadeIn();
  }
});


$(window).on('scroll', function() {
  var winWidth = $(window).width();
  if ( winWidth <= 1199 ) {
    $('#menudown').fadeOut();
  }
});


//single-room slick
  $('.single-item').slick({
    arrows: true
  });
  $('.single-room__fancybox').fancybox();

// form masked input

    $("#entry-day").mask("99");
    $("#entry-month").mask("99");
    $("#entry-year").mask("9999");
    $("#exit-day").mask("99");
    $("#exit-month").mask("99");
    $("#exit-year").mask("9999");


});

