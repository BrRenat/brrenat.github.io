$(window).load(function() { 
	//$("#status").fadeOut(); // will first fade out the loading animation
	//$("#preloader").delay(100).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("#status").addClass('hide-status'); // will first fade out the loading animation
	$("#preloader").addClass('hide-preloader'); // will fade out the white DIV that covers the website.
});


$( document ).ready(function() {
    // $('.tarif-more').click(function(){
    //     $( this ).closest('.container').hide('3000');
    //     $('#modal1').show('2000');
    // });

    $('.toggle-link').on('click', function() {
        var that = $(this),
            link = that.data('link'),
            hide = that.data('hide');

        link = $(link);
        hide = $(hide);

        if (link.length > 0 && link != undefined) {
            if (link.is('.hide')) {
                link.addClass('open').removeClass('hide').show(500);
            } else {
                link.addClass('hide').removeClass('open').hide(500);
            }
        }

        if (hide.length > 0 && hide != undefined) {
            if (hide.is('.hide')) {
                hide.addClass('open').removeClass('hide').show(500);
            } else {
                hide.addClass('hide').removeClass('open').hide(500);
            }
        }

    });
    //DEMO Toggles
    //Delete this section
    
    $('.header-dark-toggle').click(function(){          $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('#header-fixed').removeClass('header-light');               $('#header-fixed').addClass('header-dark');         $('.header-menu').removeClass('header-menu-light');      $('.header-menu').addClass('header-menu-dark');        return false;    });    
    $('.header-light-toggle').click(function(){         $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('#header-fixed').removeClass('header-dark');                $('#header-fixed').addClass('header-light');        $('.header-menu').removeClass('header-menu-dark');       $('.header-menu').addClass('header-menu-light');       return false;    });    
    $('.footer-dark-toggle').click(function(){          $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('#footer-fixed').removeClass('footer-light');               $('#footer-fixed').addClass('footer-dark');         $('.footer').removeClass('footer-light');                 $('.footer').addClass('footer-dark');   return false;    });          
    $('.footer-light-toggle').click(function(){         $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('#footer-fixed').removeClass('footer-dark');                $('#footer-fixed').addClass('footer-light');        $('.footer').removeClass('footer-dark');                $('.footer').addClass('footer-light'); return false;    });    
    $('.sidebars-dark-toggle').click(function(){        $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('.snap-drawer').removeClass('sidebar-light-clean');         $('.snap-drawer').removeClass('sidebar-light');     $('.snap-drawer').removeClass('sidebar-dark-clean');     $('.snap-drawer').addClass('sidebar-dark');            return false;    });        
    $('.sidebars-light-toggle').click(function(){       $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('.snap-drawer').removeClass('sidebar-light-clean');         $('.snap-drawer').removeClass('sidebar-dark');      $('.snap-drawer').removeClass('sidebar-dark-clean');     $('.snap-drawer').addClass('sidebar-light');           return false;    });    
    $('.sidebars-light-icon-toggle').click(function(){  $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('.snap-drawer').removeClass('sidebar-light');               $('.snap-drawer').removeClass('sidebar-dark');      $('.snap-drawer').removeClass('sidebar-dark-clean');     $('.snap-drawer').addClass('sidebar-light-clean');     return false;    });    
    $('.sidebars-dark-icon-toggle').click(function(){   $(this).parent().find('a').removeClass('active-page-setting');        $(this).addClass('active-page-setting');        $('.snap-drawer').removeClass('sidebar-light-clean');         $('.snap-drawer').removeClass('sidebar-dark');      $('.snap-drawer').removeClass('sidebar-light');          $('.snap-drawer').addClass('sidebar-dark-clean');      return false;    });        

    $('.disable-footer-menu').click(function(){
        $('#footer-fixed').addClass('disabled');
        $('.footer-clear').addClass('disabled');
    });    
    
    $('.enable-footer-menu').click(function(){
        $('#footer-fixed').removeClass('disabled');
        $('.footer-clear').removeClass('disabled');
    });    
    
    $('.disable-header-menu').click(function(){
        $('.header-menu').addClass('disabled');
        $('.open-header-menu').addClass('disabled');
    });    
    
    $('.enable-header-menu').click(function(){
        $('.header-menu').removeClass('disabled');
        $('.open-header-menu').removeClass('disabled');
    });
    
    $('.change-colors a').click(function(){
       $(this).parent().find('a').removeClass('submenu-item-active');
       $(this).addClass('submenu-item-active');
    });
    
    //Delete Untill Here//
    
    
    //Menu Settings
    
    $('.open-header-menu, .close-header-menu').click(function(){
       $('.header-menu').toggleClass('header-menu-active'); 
       $('.open-header-menu').toggleClass('header-rotate');
       $('#header-fixed').css('position','absolute');
    });
    $('.header-rotate').click(function(){
       $('#header-fixed').css('position','fixed'); 
    });

    $('.close-header-menu').click(function(){
       $('.header-menu').removeClass('header-menu-active');
       $('#header-fixed').css('position','absolute'); 
    });
    
    $('.show-submenu').click(function(){
       $(this).parent().find('.submenu').toggleClass('submenu-active'); 
       $(this).toggleClass('submenu-active');     
	   return false;  
    });
    
    
    //Fast Click - Removing 300ms delay when clicking for instant response time
    
    $(function() {
        FastClick.attach(document.body);
    });

    /*Image Sliders*/

    //Note. Every image slider must be placed within the timeout function.//
    //Image sliders put a lot of load on mobile devices and slow the performance of other animations//
    //But adding a timeout event, even for a microsecond gives a great boost in performance (41% boost to be exact)
    
    setTimeout(function() {
        //Simple Slider
        
        var owl = $('.simple-slider');
        owl.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items:1,
            loop:true,
            margin:5,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        
        //Coverpage Slider

        $('.coverpage-slider').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            items:1
        });

        //Demo Slider inside Quotes

        $('.demo-slider').owlCarousel({
            loop:true,
            margin:200,
            nav:false,
            autoHeight:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                }
            }
        });

        $('.next-demo').click(function() {$('.demo-slider').trigger('next.owl.carousel');	return false;}); 
        $('.prev-demo').click(function() {$('.demo-slider').trigger('prev.owl.carousel');	return false;});
        
        //Homepage Slider No Transitions
        $('.circle-slider').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                }
            }
        });        
        
        //Store Slider
        
        //Homepage Slider No Transitions
        $('.store-slider').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            loop:true,
            margin:30,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        });        
        
        $('.product-slider').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            loop:true,
            margin:30,
            nav:false,
            dots:false,
            items:1
        });
        
        //Homepage Slider No Transitions
        $('.homepage-slider-no-transition').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            items:1
        });
        
        //Homepage Slider With Transition
        $('.homepage-slider-transition').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            animateOut: 'fadeOut',
            animateIn: 'fadein',
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            items:1
        });
                
        
        //Homepage Slider With Transition 2
        $('.homepage-slider-transition-2').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            animateOut: 'slideOutDown',
            animateIn: 'slideInUp',
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            items:1
        });
                
        
        //Homepage Slider With Transition 2
        $('.homepage-slider-transition-3').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            animateOut: 'rollOut',
            animateIn: 'rollIn',
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            items:1
        });
        
        $('.homepage-cover-slider').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            items:1
        });
        
        $('.next-home-slider').click(function() {$('.homepage-slider-transition, .homepage-slider-transition-2, .homepage-slider-transition-3, .homepage-slider-no-transition').trigger('next.owl.carousel');	return false;}); 
        $('.prev-home-slider').click(function() {$('.homepage-slider-transition, .homepage-slider-transition-2, .homepage-slider-transition-3, .homepage-slider-no-transition').trigger('prev.owl.carousel');	return false;});
        
        
        //Staff Slider No Transition
        $('.staff-slider-no-transition').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            lazyLoad:true,
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
        
        //Staff Slider With Transition
        $('.staff-slider-transition').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            lazyLoad:true,
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
        
        $('.next-staff-slider').click(function() {$('.staff-slider-no-transition, .staff-slider-transition').trigger('next.owl.carousel');	return false;}); 
        $('.prev-staff-slider').click(function() {$('.staff-slider-no-transition, .staff-slider-transition').trigger('prev.owl.carousel');	return false;});
        
        
        //Quote Slider No Transition
        $('.quote-slider-no-transition').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            lazyLoad:true,
            loop:true,
            margin:70,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });        
        
        //Quote Slider No Transition
        $('.quote-slider-transition').owlCarousel({
            autoHeight:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            lazyLoad:true,
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        
        $('.next-quote-slider').click(function() {$('.quote-slider-no-transition, .quote-slider-transition').trigger('next.owl.carousel');	return false;}); 
        $('.prev-quote-slider').click(function() {$('.quote-slider-no-transition, .quote-slider-transition').trigger('prev.owl.carousel');	return false;});
        
        //Placing the Dots if Needed
        function slider_dots(){
            var dots_width = (-($('.owl-dots').width()/2));
            $('.owl-dots').css('position', 'absolute');
            $('.owl-dots').css('left', '50%');
            $('.owl-dots').css('margin-left', dots_width);   
        }      
        slider_dots();

    }, 1);

	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
            
    //Lazy Load | Preloading Image

    $(function() {
        $(".preload-image").lazyload({
            threshold : 200,
            effect : "fadeIn"
        });
        $("img.lazy").show().lazyload();
    });
    
    //Page Chapters Activation
    
    $('.show-page-chapters, .hide-chapters').click(function(){
       $('.page-chapters').toggleClass('page-chapters-active'); 
    });
    
    $('.page-chapters a').click(function(){
        $('.page-chapters a').removeClass('active-chapter');
        $(this).addClass('active-chapter');
    });
    
    //Countdown timer

	var endDate = "June 7, 2015 15:03:25";
    $(function() {
        $('.countdown-class').countdown({
            date: "June 7, 2087 15:03:26"
        });
    });
    
    //SiteMap Effect
    
    $('.sitemap-box a').hover(
        function() {
            $( this ).find('i').addClass('scale-hover');
        }, function() {
            $( this ).find('i').removeClass('scale-hover');
        }
    );
	    
    //Tabs
    
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active-tab');
		$('.tab-content').slideUp(200);

		$(this).addClass('active-tab');
		$("#"+tab_id).slideToggle(200);
	})
    
    //Accordion
    
    $('.accordion').find('.accordion-toggle').click(function(){
        //Expand or collapse this panel
        $(this).next().slideDown(250);
        $('.accordion').find('i').removeClass('rotate-180');
        $(this).find('i').addClass('rotate-180');

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp(200);
    });
        
    //Classic Toggles
    
    $('.toggle-title').click(function(){
        $(this).parent().find('.toggle-content').slideToggle(200); 
        $(this).find('i').toggleClass('rotate-toggle');
        return false;
    });
    
    //Notifications
    
    $('.static-notification-close').click(function(){
       $(this).parent().slideUp(200); 
        return false;
    });    
    
    $('.tap-dismiss').click(function(){
       $(this).slideUp(200); 
        return false;
    });
    
    //Modal Launchers
    
    $('.modal-close').click(function(){return false;});
    
	$('.simple-modal').click(function() {
		$('.simple-modal-content').modal();
	});	
    
    $('.social-login-modal').click(function() {
		$('.social-login-modal-content').modal();
	});    
    
    $('.simple-login-modal').click(function() {
        
		$('.simple-login-modal-content').modal();
	});    
    
    $('.social-profile-modal').click(function() {
		$('.social-profile-modal-content').modal();
	});
    
    //Sharebox Settings
        
    $('.show-share-bottom, .show-share-box').click(function(){
        $('.share-bottom').toggleClass('active-share-bottom'); 
        $.modal.close()
        return false;
    });    
    
    $('.close-share-bottom').click(function(){
       $('.share-bottom').removeClass('active-share-bottom'); 
        return false;
    });
    
    //Fixed Notifications

    //top
    $('.close-top-notification').click(function(){
       $('.top-notification').slideUp(200);
        return false;
    });
    
    $('.show-top-notification-1').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.top-notification-1').slideDown(200);
    });    
    
    $('.show-top-notification-2').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.top-notification-2').slideDown(200);
    });    
    
    $('.show-top-notification-3').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.top-notification-3').slideDown(200);
    });    
    
    //bottom
    $('.close-bottom-notification').click(function(){
       $('.bottom-notification').slideUp(200);
        clearTimeout(notification_timer);
        return false;
    });
    
    $('.show-bottom-notification-1').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.bottom-notification-1').slideDown(200);
        return false;
    });    
    
    $('.show-bottom-notification-2').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.bottom-notification-2').slideDown(200);
        return false;
    });    
    
    $('.show-bottom-notification-3').click(function(){
        $('.top-notification, .bottom-notification, .timeout-notification').slideUp(200);
        $('.bottom-notification-3').slideDown(200);
        return false;
    });
    
    //Timeout
    
    $('.timer-notification').click(function(){
        var notification_timer;
        notification_timer = setTimeout(function(){ $('.timeout-notification').slideUp(250); },5000);
    });
    
    //Switches
    
    $('.switch-1').click(function(){
       $(this).toggleClass('switch-1-on'); 
        return false;
    });
    
    $('.switch-2').click(function(){
       $(this).toggleClass('switch-2-on'); 
        return false;
    });
    
    $('.switch-3').click(function(){
       $(this).toggleClass('switch-3-on'); 
        return false;
    });
    
    $('.switch, .switch-icon').click(function(){
        $(this).parent().find('.switch-box-content').slideToggle(200); 
        $(this).parent().find('.switch-box-subtitle').slideToggle(200);
        return false;
    });
    
    //Reminders & Checklists & Tasklists
    
    $('.reminder-check-square').click(function(){
       $(this).toggleClass('reminder-check-square-selected'); 
        return false;
    });    
    
    $('.reminder-check-round').click(function(){
       $(this).toggleClass('reminder-check-round-selected'); 
        return false;
    });
    
    $('.checklist-square').click(function(){
       $(this).toggleClass('checklist-square-selected');
        return false;
    });    
    
    $('.checklist-round').click(function(){
       $(this).toggleClass('checklist-round-selected');
        return false;
    });
    
    $('.tasklist-incomplete').click(function(){
       $(this).removeClass('tasklist-incomplete'); 
       $(this).addClass('tasklist-completed'); 
    });    
    
    $('.tasklist-item').click(function(){
       $(this).toggleClass('tasklist-completed'); 
    });
    
    //Activity Item Toggle
    
    $('.activity-item').click(function(){
       $(this).find('.activity-item-detail').slideToggle(200); 
    });
    
    //Detecting Mobiles//
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    if(isMobile.any()) {
        //Settings for all mobiles
        $('head').append('<link />');
    } 
    
    if( !isMobile.any() ){
        $('.show-blackberry, .show-ios, .show-windows, .show-android').hide(0);
        $('show-no-detection').show(0);
        
        $('#content').bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -2));
          //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });
        $("#content").css("overflow-y","hidden");
    }
    
    if(isMobile.Android()) {
        $('.show-android').show(0);
        $('.show-blackberry, .show-ios, .show-windows').hide(0);
    }
        
    if(isMobile.BlackBerry()) {
        $('.show-blackberry').show(0);
        $('.show-android, .show-ios, .show-windows').hide(0);
    }
        
    if(isMobile.iOS()) {
        $('.show-ios').show(0);
        $('.show-blackberry, .show-android, .show-windows').hide(0);
    }
        
    if(isMobile.Windows()) {
        $('.show-windows').show(0);
        $('.show-blackberry, .show-ios, .show-android').hide(0);
    }
    
    $('.back-to-top-badge, .back-to-top, header-logo').click(function() {
		$('#content').animate({
			scrollTop:0
		}, 500, 'easeInOutQuad');
		return false;
	});
    
    //Show Back To Home When Scrolling
        
    $('#content').on('scroll', function () {
        var total_scroll_height = $('#content')[0].scrollHeight
        var inside_header = ($(this).scrollTop() <= 150);
        var passed_header = ($(this).scrollTop() >= 0); //250
        var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() +100 )));
        
        if (inside_header == true) {
            $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
        } else if (passed_header == true)  {
            $('.back-to-top-badge').addClass('back-to-top-badge-visible');
        } 
        if (footer_reached == true){            
            $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
        }
    });
    
    //Make contianer fullscreen//    
         
    function create_paddings(){
        var no_padding = $(window).width();
        function mobile_paddings(){
            $('.content').css('padding-left', '20px');   
            $('.content').css('padding-right', '20px');   
            $('.container-fullscreen, .image-fullscreen').css('margin-left', '-20px');
            $('.container-fullscreen, .image-fullscreen').css('width', no_padding +2);    
        }
        
        function tablet_paddings(){
            $('.content').css('padding-left', '50px');   
            $('.content').css('padding-right', '50px');  
            $('.container-fullscreen, .image-fullscreen').css('margin-left', '-50px');
            $('.container-fullscreen, .image-fullscreen').css('width', no_padding +2);              
        }
        
        if($(window).width() < 766){
            mobile_paddings()
        }        
        if($(window).width() > 766){
            tablet_paddings()
        }
    }

    $(window).resize(function() {  
        create_paddings();
    });
    
    create_paddings();
        
    //Set inputs to today's date by adding class set-day
    
    var set_input_now = new Date();
    var set_input_month = (set_input_now.getMonth() + 1);               
    var set_input_day = set_input_now.getDate();
    if(set_input_month < 10) 
        set_input_month = "0" + set_input_month;
    if(set_input_day < 10) 
        set_input_day = "0" + set_input_day;
    var set_input_today = set_input_now.getFullYear() + '-' + set_input_month + '-' + set_input_day;
    $('.set-today').val(set_input_today);
        
    
    //Portfolios and Gallerties
    
    $('.adaptive-one').click(function(){
        $('.portfolio-switch').removeClass('active-adaptive');
        $(this).addClass('active-adaptive');
        $('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-three');
        $('.portfolio-adaptive').addClass('portfolio-adaptive-one');
        return false;
    });    
    
    $('.adaptive-two').click(function(){
        $('.portfolio-switch').removeClass('active-adaptive');
        $(this).addClass('active-adaptive');
        $('.portfolio-adaptive').removeClass('portfolio-adaptive-one portfolio-adaptive-three');
        $('.portfolio-adaptive').addClass('portfolio-adaptive-two'); 
        return false;
    });    
    
    $('.adaptive-three').click(function(){
        $('.portfolio-switch').removeClass('active-adaptive');
        $(this).addClass('active-adaptive');
        $('.portfolio-adaptive').removeClass('portfolio-adaptive-two portfolio-adaptive-one');
        $('.portfolio-adaptive').addClass('portfolio-adaptive-three'); 
        return false;
    });
    
    //Wide Portfolio
    
    $('.show-wide-text').click(function(){
        $(this).parent().find('.wide-text').slideToggle(200); 
        return false;
    });
    
    $('.portfolio-close').click(function(){
       $(this).parent().parent().find('.wide-text').slideToggle(200);
        return false;
    });
    
    $('.show-gallery, .show-gallery-1, .show-gallery-2, .show-gallery-3, .show-gallery-4, .show-gallery-5, .add-gallery a').swipebox();
    
    function apply_gallery_justification(){
        var screen_widths = $(window).width();
        if( screen_widths < 768){ 
            $('.gallery-justified').justifiedGallery({
                rowHeight : 70,
                maxRowHeight : 370,
                margins : 5,
                fixedHeight:false
            });
        };

        if( screen_widths > 768){
            $('.gallery-justified').justifiedGallery({
                rowHeight : 150,
                maxRowHeight : 370,
                margins : 5,
                fixedHeight:false
            });
        };
    };
    apply_gallery_justification();
    
    //Filterable Gallery
    
    var selectedClass = "";
    $(".filter-category").click(function(){
        $('.portfolio-filter-categories a').removeClass('selected-filter');
        $(this).addClass('selected-filter');
        selectedClass = $(this).attr("data-rel");
        $(".portfolio-filter-wrapper").show(250);
        $(".portfolio-filter-wrapper div").not("."+selectedClass).delay(100).hide(250);
        setTimeout(function() {
            $("."+selectedClass).show(250);
            $(".portfolio-filter-wrapper").show(250);
        }, 0);
    });
    
    //Fullscreen Map
    
    $('.map-text, .map-overlay').click(function(){
       $('.map-text, .map-overlay').fadeOut(200); 
       $('.deactivate-map').fadeIn(200); 
    });    
    
    $('.deactivate-map').click(function(){
       $('.map-text, .map-overlay').fadeIn(200); 
       $('.deactivate-map').fadeOut(200); 
    });
    
    function generate_map(){
        var map_width = $(window).width();
        var map_height = $(window).height();
        
        $('.map-fullscreen iframe').css('width', map_width);
        $('.map-fullscreen iframe').css('height', map_height);
    };
    generate_map();
    
    //-------------------Generate Cover Screen Elements--------------------//
    //Global Settings for Fullscreen Pages, PageApps and Coverscreen Slider//
    
    function align_cover_elements(){
        var cover_width = $(window).width();
        var cover_height = $(window).height();
        var cover_vertical = -($('.cover-center').height())/2;
        var cover_horizontal = -($('.cover-center').width())/2;
        
        $('.cover-screen').css('width', cover_width);
        $('.cover-screen').css('height', cover_height);
        $('.cover-screen .overlay').css('width', cover_width);
        $('.cover-screen .overlay').css('height', cover_height);
        
        $('.cover-center').css('margin-left', cover_horizontal);      
        $('.cover-center').css('margin-top', cover_vertical + 30);     
        $('.cover-left').css('margin-top', cover_vertical);   
        $('.cover-right').css('margin-top', cover_vertical);       
        
        $('.homepage-cover, .homepage-cover-slider').css('height', cover_height);
        $('.homepage-cover, .homepage-cover-slider').css('width', cover_width +1);
        
    };
    align_cover_elements();        
    
    //Resize Functions//
    
    $(window).resize(function(){
        apply_gallery_justification();  
        align_cover_elements();
        generate_map();
    });
    
    
    //Add To HomeScreen
    /*
    addToHomescreen({
        skipFirstVisit: false,
        detectHomescreen:true,
        maxDisplayCount: 140,
        startDelay:1,
        autostart:true,
        lifespan:0
    });
	*/
    
    //Swipebox Image Gallery//
    //SVG Usage is not recommended due to poor compatibility with older Android / Windows Mobile Devices//
    
	$(".swipebox").swipebox({
		useCSS : true, 
		hideBarsDelay : 3000 // 0 to always show caption and action bar
	});
    
    //Sidebar Activation for pages with proper functions
    
    if($('body').hasClass('dual-sidebar')){   dual_sidebar();   }
    if($('body').hasClass('left-sidebar')){   left_sidebar();   }
    if($('body').hasClass('right-sidebar')){  right_sidebar();  }
    if($('body').hasClass('no-sidebar')){     no_sidebar();     }
        
    function dual_sidebar(){
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header-fixed'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'none',
            tapToClose: true,
            touchToDrag: true,
            maxPosition: 266,
            minPosition: -266
        });
        $('.close-sidebar').click(function(){snapper.close(); return false;});
        $('.open-left-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="left" ){
                snapper.close();
            } else {
                snapper.open('left');
            }
            return false;
        });	
        $('.open-right-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="right" ){
                snapper.close();
            } else {
                snapper.open('right');
            }
            return false;
        });
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
        snapper.on('drag', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
    };    
    
    function left_sidebar(){
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header-fixed'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'right',
            tapToClose: true,
            touchToDrag: true,
            maxPosition: 266,
            minPosition: -266
        });  
        $('.close-sidebar').click(function(){snapper.close(); return false;});
        $('.open-left-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="left" ){
                snapper.close();
            } else {
                snapper.open('left');
            }
            return false;
        });	
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
        snapper.on('drag', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
    };    
    
    function right_sidebar(){
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header-fixed'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'left',
            tapToClose: true,
            touchToDrag: true,
            maxPosition: 266,
            minPosition: -266
        });     
        $('.close-sidebar').click(function(){snapper.close(); return false;});
        $('.open-right-sidebar').click(function() {
            //$(this).toggleClass('remove-sidebar');
            if( snapper.state().state=="right" ){
                snapper.close();
            } else {
                snapper.open('right');
            }
            return false;
        });
        snapper.on('open', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
        snapper.on('drag', function(){$('.back-to-top-badge').removeClass('back-to-top-badge-visible');});
    };     
        
    function no_sidebar(){
        var snapper = new Snap({
            element: document.getElementById('content'),
            elementMirror: document.getElementById('header-fixed'),
            elementMirror2: document.getElementById('footer-fixed'),
            disable: 'none',
            tapToClose: false,
            touchToDrag: false
        });        
    }; 
        
});



















