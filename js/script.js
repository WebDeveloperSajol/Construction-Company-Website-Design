(function ($) {
	"use strict";

    /*=============================================
	=    		 Preloader			      =
    =============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    };

    $(window).on('load', function () {
        preloader();
        wowAnimation();
    });


	// fixed menu js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$("#header-fixed-height").addClass("active-height");
		}
	});


	// header search js
	$(".search-box button").on('click', function () {
		$(".search-header-popup").slideToggle();
		return false;
	});

	$(".close-search-popup").on('click', function () {
		$(".search-header-popup").slideUp(500);
	});

	// offcanvas menu js
	$(".offcanvas-menu button").on("click", function () {
		$(".offcanvas-menu-info,.offcanvas-menu-overlay").addClass("active");
		return false;
	});
	$(".menu-close,.offcanvas-menu-overlay").on("click", function () {
		$(".offcanvas-menu-info,.offcanvas-menu-overlay").removeClass("active");
	});


	// recent work one slider js
	$(".recent-work-slider-one").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		dots: false,
		autoplay: false,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	// active employes area slider one js
	$(".active-employes-slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		dots: true,
		autoplay: false,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	// active employes area slider two js
	$(".active-employes-slider-two").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		dots: true,
		autoplay: false,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});


	// news area one slider js
	$(".news-area-one-slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		dots: false,
		autoplay: false,
		slidesToScroll: 1,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});


	// news area two slider js
	$(".news-area-two-slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		dots: true,
		autoplay: false,
		arrows: false,
		slidesToScroll: 1,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					dots: false
				},
			},
		],
	});

	// testimonial area one slider js
	$(".testimonial-area-slider-one").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		dots: true,
		autoplay: false,
		arrows: false,
		slidesToScroll: 1,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});


	// testimonial area two slider js
	$(".testimonial-slider-two").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		dots: false,
		autoplay: false,
		arrows: true,
		slidesToScroll: 1,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	});


	// all team area slider js
	$(".all-team-area-slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		dots: true,
		autoplay: false,
		arrows: false,
		slidesToScroll: 1,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});


	// About testimonial slider js
	$(".about-testimonial-slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		dots: false,
		autoplay: false,
		arrows: true,
		slidesToScroll: 1,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		gap: '24px',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	/* Data Background js */

	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})


	/* wow Active js */
	function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }



	/* Odometer Active js */
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});


	// scroll to top js
	var btn = $(".scroll-to-top");

	$(window).scroll(function () {
		btn.toggleClass("show", $(window).scrollTop() > 300);
	});

	btn.click(function (e) {
		e.preventDefault();
		if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
			$("html").animate({
					scrollTop: 0,
				},
				800
			);
		} else {
			$("html, body").animate({
					scrollTop: 0,
				},
				0
			);
		}
	});


	// mobilel menu js

	$(".mobile-topbar .bars i").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
		return false;
	});

	$(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
	});

	$('.sub-mobile-menu ul').hide();
	$(".sub-mobile-menu a").on("click", function () {
		$(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});

})(jQuery);