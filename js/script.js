function Navigation() {
	var $navButton = $('.container .nav-button'),
		$navCloseButton = $('.container nav .close-button'),
		$nav = $('.container nav'),
		$navLink = $('.container nav ul li');

	$navButton.on('click', function() {
		$nav.stop().fadeToggle();
		$navButton.stop().fadeToggle();
	});

	$navCloseButton.on('click', function() {
		$nav.stop().fadeToggle();
		$navButton.stop().fadeToggle();
	});

	$navLink.on('click', function() {
		let buttonData = $(this).attr('data-goto');
		$("html, body").animate({
			scrollTop: $(buttonData).offset().top 
		}, 400);
	});

	$(window).bind('scroll', function() {
		var winHeight = $(window).height(),
			winWidth = $(window).width();

		if(winWidth > 550) $nav.fadeIn();

		if($(window).scrollTop() > winHeight) $('nav').addClass('fixed');
		else $('nav').removeClass('fixed');
	});

}

$(document).ready(function() {
	Navigation();
});