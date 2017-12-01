$(document).ready(function() {
	function heightDetect () {
		$(".header-wrapper").css("height", $(window).height());
	};
	heightDetect ();
	$(window).resize(function(){
		heightDetect ();
	});

// function widthDetect () {
// 	$(".section-properties").css("width", $(window).width());
// };
// 	widthDetect ();
// $(window).resize(function(){
// 		widthDetect ();
// });

$(".header-menu__bottom").click(function() {
	$(".header-menu__bottom__sandwich").toggleClass("active");
});

$(".header-menu__bottom").click(function() {
	if ($(".header-menu").is(":visible")) {
		$(".header-menu").fadeOut(700);
		$(".header-menu__ul__li__a").addClass("fadeOutDown animated");
		if ($(".header-menu__ul__li__a").is(".fadeInUp")) {
			$(".header-menu__ul__li__a").removeClass("fadeInUp");

		};			
	} else {
		$(".header-menu").fadeIn(700);
		$(".header-menu__ul__li__a").addClass("fadeInUp animated");
		if ($(".header-menu__ul__li__a").is(".fadeOutDown")) {
			$(".header-menu__ul__li__a").removeClass("fadeOutDown");

		};

	};

});

$(".header-menu__ul__li__a").click(function() {
	$(".header-menu").fadeOut(700);
	$(".header-menu__bottom__sandwich").toggleClass("active");
	$(".header-menu__ul__li__a").addClass("fadeOutDown animated");
});


function animation () {

	$(".section-header").animated("fadeInUp", "fadeOutDown");

	$(".section-wrapper-1__photo").animated("bounceIn", "bounceOut");
	if ($(window).width() > "725") {
		$(".section-wrapper-1__about-me").animated("fadeInLeft", "fadeOutLeft");
		$(".section-wrapper-1__person-date").animated("fadeInRight", "fadeOutRight");

		$(".__left-column").animated("fadeInLeft", "fadeOutLeft");

		$(".__right-column").animated("fadeInRight", "fadeOutRight");
	} else {
		$(".__right-column, .section-wrapper-1__about-me, .section-wrapper-1__person-date, .__left-column").animated("fadeInLeft", "fadeOutLeft");
	};
};
animation ();
$(window).resize(function(){
	animation ();
});

$(".section-wrapper-3__select-menu__li").click(function() {
	$(".section-wrapper-3__select-menu__li").removeClass("section-wrapper-3__select-menu__li_active");
	$(this).addClass("section-wrapper-3__select-menu__li_active");	
});

$("input,select,textarea").jqBootstrapValidation(); 

$(".section-wrapper-3__portfolio-wrapper").mixItUp();

});
$(window).load(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow");
	$(".header-name-developer__h1").animated("fadeInDown", "fadeInUp");
	$(".header-name-developer__p").animated("fadeInUp", "fadeInDown");

});

// 	$(window).scroll(function () {
// 		 if ($(window).scrollTop() > 1) {
// 		 	if ($(".section-header").is(":visible")) {
//   		$(".section-header").addClass("fadeInUp animated");
//   	} else {
//   		$(".section-header").removeClass("fadeInUp animated");
//   	}
//   }
// });
