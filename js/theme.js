;(function($) {
    "use strict";
    
    var nav_offset_top = $('header').height(); 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area, .main_header_three, .box_header_four').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".main_header_area, .main_header_three, .box_header_four").addClass("navbar_fixed");
                } else {
                    $(".main_header_area, .main_header_three, .box_header_four").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,480],
                gridwidth:[1170,970,750,700,400],
                gridheight:[625,625,550,550,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider3(){
        if ( $('#main_slider3').length ){
            $("#main_slider3").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,480],
                gridwidth:[1170,970,750,700,400],
                gridheight:[798,798,600,600,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider3();
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider4(){
        if ( $('#main_slider4').length ){
            $("#main_slider4").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1370,1199,992,767,480],
                gridwidth:[1170,1170,970,750,540,400],
                gridheight:[767,767,767,600,600,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider4();
    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider5(){
        if ( !$('#main_slider5').length ){
            return;
        }
        /* Mobile uses dedicated .mobile_hero — skip Revolution Slider */
        if ( window.matchMedia('(max-width: 991px)').matches ){
            return;
        }
        $("#main_slider5").revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            delay:4000000,
            disableProgressBar:"on",
            navigation: {
                onHoverStop: 'off',
                touch:{
                    touchenabled:"on"
                },
                arrows: {
                    style:"zeus",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:992,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 50,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 50,
                        v_offset: 0
                    }
                },
            },
            responsiveLevels:[4096,1370,1199,992,767,480],
            gridwidth:[1170,1170,970,750,700,400],
            gridheight:[620,620,620,550,550,500],
            lazyType:"smart",
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        })
    }
    main_slider5();
    
    /*----------------------------------------------------*/
    /*  Cake Feature Slider
    /*----------------------------------------------------*/
    function cake_carousel(){
        if ( $('.cake_feature_slider').length ){
            $('.cake_feature_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 4,
                nav:true,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                navContainerClass: 'cake_feature_slider',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    430: {
                        items: 2, 
                    },
                    768: {
                        items: 3, 
                    },
                    992: {
                        items: 4,
                    }
                }
            })
        }
    }
    cake_carousel();
	
    /*----------------------------------------------------*/
    /*  Cake Feature Slider
    /*----------------------------------------------------*/
    function client_say_slider(){
        if ( $('.client_says_slider').length ){
            $('.client_says_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 1,
                nav:true,
                autoplay: true,
                smartSpeed: 1500,
                dots:false,
                navContainerClass: 'client_says_slider',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
            })
        }
    }
    client_say_slider();
	
    /*----------------------------------------------------*/
    /*  Cake Feature Slider
    /*----------------------------------------------------*/
    function arivals_slider(){
        if ( $('.arivals_slider').length ){
            $('.arivals_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 2,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    420: {
                        items: 2,
                    },
                }
            })
        }
    }
    arivals_slider();
    
    /*----------------------------------------------------*/
    /*  Special Recipe Slider
    /*----------------------------------------------------*/
    function recipe_slider(){
        if ( $('.special_recipe_slider').length ){
            $('.special_recipe_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
            })
        }
    }
    recipe_slider();
	
	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	});
	
	$('#datetimepicker3').datetimepicker({
		
	});
	$('#datetimepicker4').datetimepicker({
		format: 'LT'
	});
	
	$(document).ready(function() {
	  $('.product_select, .short').niceSelect();
	});
    
	
	
	/*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function grid_gallery(){
        if ( $('.grid_portfolio_area').length ){
            // Activate isotope in container
            $(".grid_portfolio_area").imagesLoaded( function() {
                $(".grid_portfolio_area").isotope({
                    layoutMode: 'masonry',
                    percentPosition:true,
                    columnWidth: 1
                }); 
            }); 
        }
    }
    grid_gallery();
    
    /*----------------------------------------------------*/
    /*  Portfolio Isotope js
    /*----------------------------------------------------*/
    function portfolio_isotope(){
        if ( $('.portfolio_filter ul li').length ){
            // Add isotope click function
            $(".portfolio_filter ul li").on('click',function(){
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".grid_portfolio_area").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    
    portfolio_isotope();
	
	
	$( function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 10, 250 ],
			slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	});
    
    
	/*----------------------------------------------------*/
    /*  Search Popup js
    /*----------------------------------------------------*/
	$(document).ready(function() {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });

        $('.popup-with-move-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        });
    });
	
	/*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    $('.imageGallery1 .light').simpleLightbox();

	/*----------------------------------------------------*/
    /*  Sweet Moments sequential autoplay + mobile scroll
    /*----------------------------------------------------*/
	function sweetMomentsPlayer(){
		var $root = $('#sweetMomentsPlayer');
		if (!$root.length) return;

		var $cards = $root.find('.sweet_moment_card');
		var $slides = $root.find('.sweet_moment_slide');
		var videos = $cards.find('.sweet_moment_video').toArray();
		var index = 0;
		var started = false;
		var scrollTimer = null;
		var isMobile = function(){
			return window.matchMedia('(max-width: 991px)').matches;
		};

		function setActive(i){
			$cards.removeClass('is-active');
			$cards.eq(i).addClass('is-active');
		}

		function scrollCardIntoView(i){
			if (!isMobile()) return;
			var scroller = $root[0];
			var slide = $slides.get(i);
			if (!scroller || !slide) return;
			var left = slide.offsetLeft - (scroller.clientWidth - slide.clientWidth) / 2;
			scroller.scrollTo({
				left: Math.max(0, left),
				behavior: 'smooth'
			});
		}

		function playAt(i, fromScroll){
			index = i;
			videos.forEach(function(video, n){
				if (n === i) return;
				video.pause();
				try { video.currentTime = 0; } catch (e) {}
			});
			setActive(i);
			if (!fromScroll) {
				scrollCardIntoView(i);
			}
			var current = videos[i];
			current.muted = true;
			var playPromise = current.play();
			if (playPromise && typeof playPromise.catch === 'function') {
				playPromise.catch(function(){});
			}
		}

		function playNext(){
			playAt((index + 1) % videos.length, false);
		}

		function nearestSlideIndex(){
			var rootRect = $root[0].getBoundingClientRect();
			var centerX = rootRect.left + rootRect.width / 2;
			var best = 0;
			var bestDist = Infinity;
			$slides.each(function(i){
				var r = this.getBoundingClientRect();
				var mid = r.left + r.width / 2;
				var dist = Math.abs(mid - centerX);
				if (dist < bestDist) {
					bestDist = dist;
					best = i;
				}
			});
			return best;
		}

		videos.forEach(function(video, i){
			video.addEventListener('ended', function(){
				playNext();
			});
			$cards.eq(i).on('click', function(){
				playAt(i, false);
			});
		});

		$root.on('scroll', function(){
			if (!isMobile() || !started) return;
			clearTimeout(scrollTimer);
			scrollTimer = setTimeout(function(){
				var nearest = nearestSlideIndex();
				if (nearest !== index) {
					playAt(nearest, true);
				}
			}, 120);
		});

		function startWhenVisible(){
			if (started || !videos.length) return;
			var root = $root[0];
			var rect = root.getBoundingClientRect();
			var inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
			if (inView) {
				started = true;
				playAt(0, false);
			}
		}

		$(window).on('scroll load resize', startWhenVisible);
		startWhenVisible();
	}
	sweetMomentsPlayer();
	
	
})(jQuery)
