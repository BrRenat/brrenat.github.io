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

$(window).on('load', function(){
    mainNavActive();
    mobileNav()
});

$(window).on('resize', function(){
    if ($(window).width() < 740 ) {
        return false
    } else {
        mainNavActive()
    }
});