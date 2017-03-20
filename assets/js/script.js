$(document).ready(function(){


// Hiding Things
	$('#fulldive-overlay').hide();
	$('#beyondsmartphones-overlay').hide();
	$('#trackslash-overlay').hide();
	$('#wingit-overlay').hide();
	$('#twinkle-overlay').hide();
	$('#dayrise-overlay').hide();
	$('#taug-overlay').hide();
	$('#joybook-overlay').hide();
	$('#hkcafe-overlay').hide();
	$('#lasercut-overlay').hide();
	$('.project-nav').hide();

// Navigation
	$('#navhome').hover(function() {
		$('#navhome').css('animation', 'wigglea 1s ease-in-out infinite');
		$('#navhome').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#navhome').css('animation', 'wigglea 1s ease-in-out infinite');
		});
	}, function(){
		$('#navhome').css('animation', '');
	});	



// Project Hovers
	$('#fulldive').hover(function() {
		$('#fulldive-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#fulldive-overlay').stop(true, true).fadeOut(700);
	});

	$('#beyondsmartphones').hover(function() {
		$('#beyondsmartphones-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#beyondsmartphones-overlay').stop(true, true).fadeOut(700);
	});

	$('#trackslash').hover(function() {
		$('#trackslash-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#trackslash-overlay').stop(true, true).fadeOut(700);
	});


	$('#wingit').hover(function() {
		$('#wingit-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#wingit-overlay').stop(true, true).fadeOut(700);
	});

	$('#twinkle').hover(function() {
		$('#twinkle-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#twinkle-overlay').stop(true, true).fadeOut(700);
	});

	$('#dayrise').hover(function() {
		$('#dayrise-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#dayrise-overlay').stop(true, true).fadeOut(700);
	});

	$('#taug').hover(function() {
		$('#taug-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#taug-overlay').stop(true, true).fadeOut(700);
	});

	$('#joybook').hover(function() {
		$('#joybook-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#joybook-overlay').stop(true, true).fadeOut(700);
	});

	$('#hkcafe').hover(function() {
		$('#hkcafe-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#hkcafe-overlay').stop(true, true).fadeOut(700);
	});


	$('#lasercut').hover(function() {
		$('#lasercut-overlay').stop(true, true).fadeIn(700);
	}, function(){
		$('#lasercut-overlay').stop(true, true).fadeOut(700);
	});

// Cutie Animation

	$('.orange').mouseenter(function() {
		$('.orange').css('animation', 'cutierotate 1.5s ease-in');
		$('.orange').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {

		$('.orange').css('animation', 'wiggling .8s infinite');

		});
	});


	$('.orange').mouseleave(function() {
		$('.orange').bind('animationiteration webkitAnimationIteration', function() {
		$('.orange').css('animation', '');
		// $(this).css('animation', '');
		$('.orange').unbind('animationiteration webkitAnimationIteration');
	});
	});

// Project Scroll
	// $(window).scroll(function() {
	// 	if ($(window).scrollTop() > $('.project-hero').offset().top) {
	// 		$('.project-nav').fadeIn(700);
	// 	}

	// 	else if ($(window).scrollTop() < $('.project-hero').offset().top) {
	// 		$('.project-nav').hide();
	// 	}

	// });

	$(window).scroll(function() {
		console.log($(this).scrollTop());
		var y = $(this).scrollTop();
		if (y > 400) {
			$('.project-nav').fadeIn(700);
		}

		else if (y = 0) {
			$('.project-nav').hide();
		}

		else {
			$('.project-nav').hide();
		}

	});

	$("#project-nav-top").click(function(){
 		scroll(0,0);
	});



//Slides

	var slideIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("trackslash-slides");
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = "none"; 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	    x[slideIndex-1].style.display = "block"; 
	    setTimeout(carousel, 2000); // Change image every 2 seconds
	}





});