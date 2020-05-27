$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });
  


$(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }).trigger('scroll');
  

$(document).ready(function(){

  //Click NavBar
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });
  
  //Sticky Bar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.menu').addClass("sticky");
    }
    else {
      $('.menu').removeClass("sticky");
    }
  });
  //Smooth Scrool
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });




//MIx IT UP

    var mixer = mixitup('.prt');

});