Zepto(function($){
    $.fn.initPreloader();
});
(function ($) {
    $.fn.initPreloader = function () {
        var opt = {
            elements: 'img, iframe',
            elementsSvg: '.st0',
            mode: 'time', //percent, time
            startTimeAnimation: 10000,
            increase: 50, //>
            decrease: 100, //<
            endAnimation: 1000,
            animationCss: {
                'stroke-dasharray': '100% 0%'
            }
        };

        var data = {
            total: 0,
            count: 0,
            date: 0,
            currentPercent: 0,
            lastPercent: 0,
            startTimeAnimation: 0,
            currentMaxTimeAnimation: 0,
            elements: undefined,
            svgPath: undefined
        };

        data.elements = $(opt.elements);
        data.svgPath = $(opt.elementsSvg);
        data.total = data.elements.length;
        data.startTimeAnimation = opt.startTimeAnimation;
        data.date = new Date().getTime();

        var method = {
            setPreload: function (time) {
                var thisTime = new Date().getTime(),
                    currentTime = thisTime - data.date,
                    currentPercent = (data.count * 100) / data.total,
                    currentMaxTimeAnimation = (data.startTimeAnimation / 100) * currentPercent;

                switch (opt.mode) {
                    case 'time':
                        if (currentMaxTimeAnimation < currentTime) {
                            data.startTimeAnimation += opt.increase;
                        } else if (currentMaxTimeAnimation > currentTime) {
                            data.startTimeAnimation -= opt.decrease;
                        }
                        break;

                    default:
                    case 'percent':
                        if (data.lastPercent >= currentPercent) {
                            data.startTimeAnimation += opt.increase;
                        } else if (data.lastPercent < currentPercent) {
                            data.startTimeAnimation -= opt.decrease;
                        }
                        break;
                }

                if (time != undefined && !isNaN(parseFloat(time)) && isFinite(time)) {
                    data.startTimeAnimation = time;
                }

                data.svgPath.stopTranAnim().animate(opt.animationCss, {
                    duration: data.startTimeAnimation
                });

                data.lastPercente = currentPercent;
            },

            setPreloadChild: function () {
                    setTimeout(function() {
                        $('.st1').animate({opacity: "1"}, opt.endAnimation/2);
                    }, opt.endAnimation);
                },

            hidePreloader: function () {
                    setTimeout(function() {
                        $(".st0").animate({
                            'stroke-dasharray': 0 + '%' + 100 + '%' 
                        }, 500,'ease');
                        $(".st1").animate({
                            'fill': 'none' 
                        }, 500,'ease');
                    },  opt.endAnimation + opt.endAnimation/2 );
                    setTimeout(function() {
                        $('body').addClass('load').removeClass('preload');
                    },  opt.endAnimation + opt.endAnimation/2 + 500 );
                }
            };


        var interval = setInterval(method.setPreload, 100);

        data.elements.each(function () {
            $(this).one('load error', function () {
                ++data.count;

                if (data.count >= data.total) {
                    clearInterval(interval);
                    interval = null;

                    method.setPreload(opt.endAnimation);
                    method.setPreloadChild();
                    method.hidePreloader();
                };
            }).each(function () {
                if (this.complete) {
                    $(this).load();
                }
            });
        });
    };

    (function ($) {
        var prefix = $.fx.cssPrefix, transitionEnd = $.fx.transitionEnd, cssReset = {};

        cssReset[transitionProperty = prefix + 'transition-property'] =
        cssReset[transitionDuration = prefix + 'transition-duration'] =
        cssReset[transitionTiming   = prefix + 'transition-timing-function'] = '';

        $.fn.stopTranAnim = function(jumpToEnd, cancelCallback){

            var props, style, cssValues = {}, i;

            props = this.css(prefix + 'transition-property').split(', ');

            if (!props.length) {
                return this;
            }

            if (!jumpToEnd) {
                style = document.defaultView.getComputedStyle(this.get(0), '');
                for (i = 0; i < props.length; i++) {
                    this.css(props[i], style.getPropertyValue(props[i]));
                }
            }

            if (cancelCallback) {
                this.unbind(transitionEnd).css(cssReset);
            } else {
                this.trigger(transitionEnd);
            }

            return this;

        }
    })(Zepto);
})(Zepto);