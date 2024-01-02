
// custom accordion with change image:start

$(document).ready(function() {
	$(".who_heading").on("click", function() {
	  if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).siblings(".accordion-collapse").slideUp(200);
		$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
	  } else {
		$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
		$(this).find("i").removeClass("fa-plus").addClass("who_heading");
		$(".who_heading").removeClass("active");
		$(this).addClass("active");
		$(".accordion-collapse").slideUp(200);
		$(this)
		  .siblings(".accordion-collapse")
		  .slideDown(200);
	  }
	});
});

$(document).ready(function(){	
    $(document).on('click', '.accordion-button', function(e){
		e.preventDefault();
		var ShowImg = $(this).attr('data-showimg');	
		$(this).addClass('active');
		$(this).parents().siblings().find('.accordion-button').removeClass('active');
		$(this).parents('.who_we_sec').find('.imgbox').removeClass("active");
		$(this).parents('.who_we_sec').find('.'+ShowImg).addClass("active");		
	});
});

// custom accordion with change image:end

// slick slider:start

var $status = $('.pagingInfo');
var $slickElement = $('.welcome_showcase');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
	infinite: false,
	adaptiveHeight: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	pauseOnHover: false,
	autoplay: false,
	speed: 1000,
	autoplaySpeed: 2000,
	fade: true,
	arrows: true,
	prevArrow: "<button type='button' class='slick-prev'></button>",
	nextArrow: "<button type='button' class='slick-next'></button>",
	appendArrows: '.slider-nav'
});

// slick slider:end