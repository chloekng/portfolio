$(document).ready(function(){



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

	let modalImg = document.getElementById('img-overlaid');



	$('.writeup-img').click(function() {
		if ($(window).width() > 800) {
			$('#img-overlay').show();
			modalImg.src = this.src;
			$('body').addClass('noscroll');

		}

	});

	let imgOverlay = document.getElementsByClassName("close")[0];


	imgOverlay.onclick = function() { 
  		$('#img-overlay').hide();
  		$('body').removeClass('noscroll');
	}



// Project Scroll


	window.onscroll = function(event) {
		if ((window.pageYOffset + 300) > (document.body.offsetHeight - window.innerHeight)) {
			$('.sidebar-l').css('display', 'none');
		} else if (window.pageYOffset >= 600) {
			$('.sidebar-l').css('display', 'block');
			$('.sidebar-r').css('display', 'block');			
		} else if (window.pageYOffset < 600) {
			$('.sidebar-l').css('display', 'none');
			$('.sidebar-r').css('display', 'none');			
		}
	}



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

	// var slideIndex = 0;
	// carousel();

	// function carousel() {
	//     var i;
	//     var x = document.getElementsByClassName('slides');
	//     for (i = 0; i < x.length; i++) {
	//       x[i].style.display = 'none'; 
	//     }
	//     slideIndex++;
	//     if (slideIndex > x.length) {slideIndex = 1} 
	//     x[slideIndex-1].style.display = 'block'; 
	//     setTimeout(carousel, 2000); // Change image every 2 seconds
	// }



});    