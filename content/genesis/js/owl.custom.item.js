$(document).ready(function(){
		if ($(window).width() <= '540'){
			     	$(".owl-carousel1").owlCarousel({
						items: 2,
						loop: false
					});
					$(".owl-carousel2").owlCarousel({
						items: 1
						});
			     } else {
			     	$(".owl-carousel1").owlCarousel({
						items: 4,
						loop: false
					});
					$(".owl-carousel2").owlCarousel({
						items: 2
						});
			     };
});

