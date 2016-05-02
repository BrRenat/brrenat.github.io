var owl = $('.owl-carousel');
owlmyres();
$( "#owl_filter" ).click(function() {
	if ($("#owl_filter option:selected").text() == "all") {
		owl.trigger('destroy.owl.carousel');
		$( ".white, .color" ).appendTo(".owl-carousel");
		$( "div.owl-stage-outer" ).remove();
		owlmyres();
	} else if ($("#owl_filter option:selected").text() == "color") {
		owl.trigger('destroy.owl.carousel');
		$( ".white" ).appendTo("#owl_hide");
		$( ".color" ).appendTo(".owl-carousel");
		$( "div.owl-stage-outer" ).remove();
		owlmyres();
	} else {
		owl.trigger('destroy.owl.carousel');
		$( ".color" ).appendTo("#owl_hide");
		$( ".white" ).appendTo(".owl-carousel");
		$( "div.owl-stage-outer" ).remove();
		owlmyres();
	}
});


$( window ).resize(function() {
	owl.trigger('destroy.owl.carousel');
	$( ".white, .color" ).appendTo(".owl-carousel");
	$( "div.owl-stage-outer" ).remove();
  owlmyres();
});



function owlmyres() {
if ($(window).width() <= '450'){
			     	owl.owlCarousel({
						items: 1
					});
					
			     } else if ($(window).width() <= '570') {
			     	owl.owlCarousel({
						items: 2
					});
			     } else {
			     	owl.owlCarousel({
						items: 4
					});
			     };
};