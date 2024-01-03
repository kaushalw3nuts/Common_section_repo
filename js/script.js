
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


// image comparision in success story section : start

jQuery(document).ready(function($) {
    var dragging = false,
        scrolling = false,
        resizing = false;

    var imageComparisonContainers = $('.succes_story_wrap .successbox .cd-image-container');
    checkPosition(imageComparisonContainers);

    $(window).on('scroll', function() {
        if (!scrolling) {
            scrolling = true;
            (!window.requestAnimationFrame)
                ? setTimeout(function() { checkPosition(imageComparisonContainers); }, 100)
                : requestAnimationFrame(function() { checkPosition(imageComparisonContainers); });
        }
    });

    imageComparisonContainers.each(function() {
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    $(window).on('resize', function() {
        if (!resizing) {
            resizing = true;
            (!window.requestAnimationFrame)
                ? setTimeout(function() { checkLabel(imageComparisonContainers); }, 100)
                : requestAnimationFrame(function() { checkLabel(imageComparisonContainers); });
        }
    });

    function checkPosition(container) {
        container.each(function() {
            var actualContainer = $(this);
            if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
                actualContainer.addClass('is-visible');
            }
        });

        scrolling = false;
    }

    function checkLabel(container) {
        container.each(function() {
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });

        resizing = false;
    }

    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
        dragElement.on("mousedown touchstart", function(e) {
            e.preventDefault();

            dragging = true;
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            var dragWidth = dragElement.outerWidth(),
                xPosition = (e.type === 'mousedown') ? dragElement.offset().left + dragWidth - e.pageX : dragElement.offset().left + dragWidth - e.originalEvent.touches[0].pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;

            $(document).on("mousemove touchmove", function(e) {
                var pageX = (e.type === 'mousemove') ? e.pageX : e.originalEvent.touches[0].pageX;
                var leftValue = pageX + xPosition - dragWidth;

                if (leftValue < minLeft) {
                    leftValue = minLeft;
                } else if (leftValue > maxLeft) {
                    leftValue = maxLeft;
                }

                var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

                $('.draggable').css('left', widthValue);

                $('.resizable').css('width', widthValue);

                updateLabel(labelResizeElement, resizeElement, 'left');
                updateLabel(labelContainer, resizeElement, 'right');
            }).on("mouseup touchend", function() {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
                dragging = false;
            });
        });
    }

    function updateLabel(label, resizeElement, position) {
        if (position == 'left') {
            (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
        } else {
            (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
        }
    }
});

// image comparision in success story section :end

// accordian function start

(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

// accordian function end