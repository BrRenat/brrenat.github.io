
$( ".portfolio_nav_id" ).click(function() {
	if ($( this ).attr('id') == "all") {
		$( ".grid1-item" ).appendTo($(".grid1"))
	} else if ($( this ).attr('id') == "pillarce") {
		$( ".grid1 > :not(.pillarce)" ).appendTo($("#portfolio_hide"));
		$(".pillarce").appendTo($(".grid1"))
	} 
	else if ($( this ).attr('id') == "banners") {
		$( ".grid1 > :not(.banners)" ).appendTo($("#portfolio_hide"));
		$(".banners").appendTo($(".grid1"))
	} else if ($( this ).attr('id') == "design") {
		$( ".grid1 > :not(.design)" ).appendTo($("#portfolio_hide"));
		$(".design").appendTo($(".grid1"))
	} else if ($( this ).attr('id') == "infograph") {
		$( ".grid1 > :not(.infograph)" ).appendTo($("#portfolio_hide"));
		$(".infograph").appendTo($(".grid1"))
	} 
	$('.navbar-toggle-portfolio').click();
});