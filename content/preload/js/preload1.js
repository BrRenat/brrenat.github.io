var date;
$(document).ready(function(){
    $( this ).loadElements();
    date = new Date().getTime();
});

// window.onload = function() {
//     $(document).hidePreloader();
// };

$.fn.loadElements = function() {
	var elements = $(document).find('img, iframe'),
        total = elements.length,
        delay = 5000,
        w1 = 8000,
        count = 0,
        a = 0,
        x = 100,
        currentX,
        y = 0;

    elements.each(function () {
                $(this).one('load error', function () {
                    ++count;
                    if ( count != total ) {
                        a = (count * 100) / total;
                        x = a;
                        var el = $('.preloader'),
                            newel = el.clone(true);
                        el.before(newel);
                        el.remove();
                        currentX = $(".st0").css("stroke-dasharray").split(',')[0];
                        currentX = Number(currentX.substring(0, currentX.length - 1));
                        console.log({
                            'x' : x,
                            'currentX' : currentX
                        });
                        animatePreload( currentX );
                    };
                    if (count >= total & count != 0) {
                        animatePreload(100);
                        console.log('end')
                    }
                })
            });

    var animatePreload = function (x) {
        var thisTime = new Date().getTime();
        var currentTime = thisTime - date;
        w1 = w1 + currentTime;
		y = 100 - x;
		$(".st0").animate({
			'stroke-dasharray': x + '%' + y + '%' 
		}, 8000,'linear');
		
		console.log({
			'w1' : w1,
			'count' : count,
			'a' : a,
			'style' : Number($(".st0").css("stroke-dasharray")[0]),
            'currentTime' : currentTime,
            'delay' : delay
		})
    }

    // $('#stop').click(function(){
    //     var el = $('.preloader'),
    //         newel = el.clone(true);
    //     el.before(newel);
    //     el.remove();
    //     animatePreload(50)
    // })
	// var timeout = setInterval(function() {
		
 //           animatePreload(w1,x)
        
 //    }, 1);
};

// $.fn.hidePreloader = function () {
//     // $(".st1").animate({
//     //     'opacity': 1
//     // }, 500,'linear');
//     // $('body').addClass("load");
// }