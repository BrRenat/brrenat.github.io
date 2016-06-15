$(document).ready(function(){
    $( this ).loadElements();
});
(function ($z, $q) {
$q.fn.loadElements = function() {
            var elements = $q(document).find('img, iframe'),
                total = elements.length,
                date = new Date().getTime();

            var count = 0,
                x = 0,
                w1 = 0,
                full_time = 8000;


            var hz = function (time) {
                var thisTime = new Date().getTime();
                var currentTime = thisTime - date;

                
                x = (count * 100) / total;
                w1 = (full_time / 100) * x;
                
                w1 = currentTime + w1;

                if (time != undefined) {
                    w1 = time;
                }

                // $z(".st0").queueAnim([
                //     [ { 'stroke-dasharray': 0 + '%' + 100 + '%'}, currentTime, 'ease-out' ],
                //     [ { 'stroke-dasharray': 100 + '%' + 0 + '%'}, w1, 'ease-out' ]
                // ]);
                $z(".st0").animate({
                    'stroke-dasharray': x + '%' + (100 - x) + '%' 
                },w1,'ease');

                console.log({
                    'x': x,
                    'count': count,
                    'currentTime': currentTime,
                    'w1': w1,
                    'total': total,
                    'thisTime': thisTime,
                    'full_time': full_time
                });
            };

            var timeout = setInterval(function() {
                        hz();

                    }, 500);
            
            elements.each(function () {
                $q(this).one('load error', function () {
                    ++count;
                    if (count >= total) {
                        clearInterval(timeout);
                        timeout = null;
                        console.log('yaaaa');
                        hz(2000);
                        $(document).hidePreloader()
                    }
                    
                }).each(function () {
                    if (this.complete) {
                        $q(this).load();
                    }
                });
            });
        };

$q.fn.hidePreloader = function () {
    $('body').addClass("load");
    $('body').removeClass("preload");
}



$z.fn.queueAnim = function (steps, callback) {
  var $selector = this;

  function iterator(step) {
    step.push(iterate);
    $selector.animate.apply($selector, step); 
  }

  function iterate() {
    if (!steps.length) return callback && callback();
    
    var step = steps.shift();
    iterator(step);
  }

  iterate();
};




})(Zepto, jQuery);