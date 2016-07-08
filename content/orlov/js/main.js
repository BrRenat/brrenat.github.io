function mainNavActive() {
    var
        activePoint = $('.navLG .active-point'),
        navBase = $('.navLG .header__nav-first'),
        navLink = $('.navLG .header__nav-first > li'),
        activeFlag = undefined,
        activePageX,
        activePageWidth,
        navCoords = navBase.offset();
    navLink.each(function() {
        if ($(this).hasClass('header__nav-list-active') == true) {
            activePageX = $(this).offset();
            activePageWidth = $(this).width();
            activePageX = activePageX.left;
            activeFlag = $(this);
            activeFlag.css({
                color: '#4b403f'
            });
            activePoint.css({
                opacity: 1,
                top: 0,
                left: activePageX - navCoords.left + 'px',
                width: activePageWidth + 'px'
            });
        }
    });
    navLink.on('mousemove', function(){
        var
            currentLink = $(this),
            currentX = currentLink.offset(),
            currentWidth = currentLink.width();
        currentX = currentX.left;
        activePoint.css({
            opacity: 1,
            top: 0,
            left: currentX - navCoords.left + 'px',
            width: currentWidth + 'px'
        });
        navLink.css({
            color: '#fff'
        });
        currentLink.css({
            color: '#4b403f'
        });
        if (activeFlag != undefined) {
            if (currentLink != activeFlag) {
                activeFlag.css({
                    color: '#fff'
                })
            } else {
                activeFlag.css({
                    color: '#4b403f'
                })
            } 
        }

    });
    navBase.on('mouseleave', function(){
        var q;
        navLink.each(function() {
            if ($(this).hasClass('header__nav-list-active') == true) {
                activePageX = $(this).offset();
                activePageWidth = $(this).width();
                activePageX = activePageX.left;
                activePoint.css({
                    opacity: 1,
                    top: 0,
                    left: activePageX - navCoords.left + 'px',
                    width: activePageWidth + 'px'
                });
                q = true
            };
            if (q != true) {
                activePoint.css({
                    opacity: 0
                });
            }
            $(this).css({
                color: '#fff'
            });
        });
        if (activeFlag != undefined) {
            activeFlag.css({
                color: '#4b403f'
            })
        }
    });
    console.log('active');
};

function mobileNav() {
    var target = $('.navXS .target_nav'),
        dropdown = target.parent().find('.header__nav--second'),
        dropdownTarget;
    dropdown.hide();
    target.on('click', function(){
        $(this).toggleClass('open');
        dropdownTarget = $(this).parent().find('.header__nav--second');
        if (dropdownTarget.is(':visible') != true) {
            dropdown.hide();
            dropdownTarget.show();
        } else {
            dropdownTarget.hide()
        };
    });

    var targetHead = $('.navXS__head .target_nav'),
        dropdownHead = targetHead.parent().parent().find('.header__nav-first');
    dropdownHead.hide();
    targetHead.on('click', function(){
        dropdownTargetHead = $(this).parent().find('.header__nav-first');
        dropdownHead.toggle();
    });
};

function feedbackMore() {
    var allLink = $('.feedback-link'),
        allBlock = $('.feedback');
    allLink.on('click',function(){
      var currentLink = $(this),
          currentBlock = currentLink.parent();
      currentBlock.toggleClass('more')
  })
};
function dataPicker() {
    var check_in = flatpickr("#check_in_date", { minDate: new Date() });
    var check_out = flatpickr("#check_out_date", { minDate: new Date() });

    check_in.set("onChange", function(d) {
        check_out.set("minDate", d.fp_incr(1)); //increment by one day
    });
    check_out.set("onChange", function(d) {
        check_in.set("maxDate", d);
    });

    flatpickr.init.prototype.l10n.weekdays.shorthand = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    flatpickr.init.prototype.l10n.months.longhand = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    flatpickr.init.prototype.l10n.firstDayOfWeek = 1;
    flatpickr('.calendar');
}
$(window).on('load', function(){
    mainNavActive();
    mobileNav();
    feedbackMore();
    dataPicker()
});

$(document).on('ready', function(){
    $('.feedback_gallery').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });
    $('.gallery').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });
    $('.banner__slide').slick({
        infinite: true,
        autoplay: false,
        dots: true,
        autoplaySpeed: 15000,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        dotsClass: 'banner__slide-dots',
        prevArrow: '<span class="banner__slide-nav banner__slide-nav-prev"></span>',
        nextArrow:  '<span class="banner__slide-nav banner__slide-nav-next"></span>'
    });
    $('a.gallery__item-link').colorbox({rel:'gal'});
});

$(window).on('resize', function(){
    if ($(window).width() < 740 ) {
        return false
    } else {
        mainNavActive()
    }
});