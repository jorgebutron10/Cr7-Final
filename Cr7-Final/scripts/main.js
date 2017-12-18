$(document).ready(function(){
 /* made a clone of the header so when you scroll 
 header sticks & doesnt dissapear*/
 
 var $header = $('header');
 var $sticky = $header.before($header.clone().addClass('sticky'));
 });

// actual function of header sticking and not dissapearing
 $(window).on("scroll" , function(){  
var scrollFromTop = $(window).scrollTop()
$("body").toggleClass("scroll",(scrollFromTop > 150));
 });
	// masonry library // slider (prev/next code from slickjs.com)
		/* options of how the grid will look
		 their is many different types of looks in
		 masonry js*/
		  /* fidWidth makes it fit in the container its in */
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 120,
		fitWidth: true  
		});

	// slider (prev/next code from slickjs.com)
	

	$('.slider').slick({
        autoplay: true,
        autoplaySpeed:1500,
        arrows: true,
        dots: false,
        centerMode: true,
        slidesToShow: 3,
        fade:false,
        prevArrow:'<button type="button" class="slick-prev">Previous</button>',
        nextArrow:'<button type="button" class="slick-next">Previous</button>',

        responsive: [
          {
            breakpoint: 990,
            settings: {
            slidesToShow: 2
              }
          },
          {
            breakpoint: 768,
            settings: {
            slidesToShow: 1
              }
          }
        ]
    });




















