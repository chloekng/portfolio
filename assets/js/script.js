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
		$('#fulldive-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#fulldive-overlay').stop(true, true).fadeOut(400);
	});

	$('#beyondsmartphones').hover(function() {
		$('#beyondsmartphones-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#beyondsmartphones-overlay').stop(true, true).fadeOut(400);
	});

	$('#trackslash').hover(function() {
		$('#trackslash-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#trackslash-overlay').stop(true, true).fadeOut(400);
	});


	$('#wingit').hover(function() {
		$('#wingit-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#wingit-overlay').stop(true, true).fadeOut(400);
	});

	$('#twinkle').hover(function() {
		$('#twinkle-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#twinkle-overlay').stop(true, true).fadeOut(400);
	});

	$('#dayrise').hover(function() {
		$('#dayrise-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#dayrise-overlay').stop(true, true).fadeOut(400);
	});

	$('#taug').hover(function() {
		$('#taug-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#taug-overlay').stop(true, true).fadeOut(400);
	});

	$('#joybook').hover(function() {
		$('#joybook-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#joybook-overlay').stop(true, true).fadeOut(400);
	});

	$('#hkcafe').hover(function() {
		$('#hkcafe-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#hkcafe-overlay').stop(true, true).fadeOut(400);
	});


	$('#lasercut').hover(function() {
		$('#lasercut-overlay').stop(true, true).fadeIn(400);
	}, function(){
		$('#lasercut-overlay').stop(true, true).fadeOut(400);
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


// Project Image

	var modalImg = document.getElementById('img-overlaid');



	$('.writeup-img').click(function() {
		if ($(window).width() > 800) {
			$('#img-overlay').show();
			modalImg.src = this.src;
			$('body').addClass('noscroll');

		}

	});

	var span = document.getElementsByClassName("close")[0];


	span.onclick = function() { 
  		$('#img-overlay').hide();
  		$('body').removeClass('noscroll');
	}



// Project Scroll


	window.onscroll = function(ev) {
    	if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 250) {
        	$('.project-nav').hide();
    	}

    	else if (document.body.scrollTop >= 600) {
    		$('.project-nav').show();
    	}

    	else {
    		$('.project-nav').hide();
    	}

	};



	$('#project-nav-top').click(function(){
 		$('html, body').animate({scrollTop : 0},800);
	});


// Smooth Scroll

  // Add smooth scrolling to all links
  $('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 3000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



//Slides

	var slideIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName('slides');
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = 'none'; 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	    x[slideIndex-1].style.display = 'block'; 
	    setTimeout(carousel, 2000); // Change image every 2 seconds
	}



});    