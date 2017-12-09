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



	$('#project-nav-top').click(function(){
 		$('html, body').animate({scrollTop : 0},800);
	});


// window.scrollTo(x, y)

	var projHeading = document.querySelectorAll('.project-writeup .h3');
	var projSide = [];
	var headingPos = [];
	var projHeadingPos = {};
		
	// projHeading.each(function() {
 //    	projHeadingPos[ $(this).attr('id') ] = $('#navigation > ul > li > a[href=#' + $(this).attr('id') + ']');
	// });


	//making sidebar-l
	for (let i = 0; i < (projHeading.length-1); i++) {

		//getting the position & pushing to array
		headingPos.push($(projHeading[i]).offset().top);
		let thisProjHeadingPos = $(projHeading[i]).offset().top;
		projHeadingPos[$(projHeading[i]).attr('id')] = thisProjHeadingPos;

		//creating sidebar element
		let newHeading = document.createElement('a');
		let newBreak = document.createElement('br');
		newHeading.className = 'h4';
		newHeading.id = projHeading[i].id;
		let newHeadingText = document.createTextNode(projHeading[i].innerHTML);


		//setting link destination
		newHeading.href = '#' + projHeading[i].id;

		//attaching to the appropriate things
		newHeading.append(newHeadingText);
		$('.sidebar-l').append(newHeading, newBreak);
		projSide.push(newHeading);


	}





	$(window).on('scroll', function() {
		console.log("hey scroll");

		//getting side nav to appear
  		if ((window.pageYOffset + 300) > (document.body.offsetHeight - window.innerHeight)) {
			$('.sidebar-l').css('display', 'none');
		} else if (window.pageYOffset >= window.innerHeight) {
			$('.sidebar-l').css('display', 'block');
			$('.sidebar-r').css('display', 'block');			
		} else if (window.pageYOffset < window.innerHeight) {
			$('.sidebar-l').css('display', 'none');
			$('.sidebar-r').css('display', 'none');			
		}



		var position = $(this).scrollTop();

	    $('.project-writeup .h3').each(function() {
	        var thisSection = $(this).attr('id');
	        var sectionTop = $(this).offset().top;
	        var headingToChange = projHeadingPos[thisSection];


	        if (position >= sectionTop) {
	        	$('#' + thisSection).css('background-position', 'left');
	        } else {
	        	$('#' + thisSection).css('background-position', 'right');

	        }
	    });


		// for (let i = 0; i < (projSide.length); i++) {
		// //set i based on position in page? 
		// //make zones based on i positions??
		// 	if (window.pageYOffset > headingPos[i]) {
		// 	 		$(projSide[i]).css('background-position', 'left');
		// 			console.log(i)
		// 	 	} else if (window.pageYOffset < headingPos[i]) {
		// 	 		$(projSide[i]).css('background-position', 'right');
		// 	 		console.log(i);
		// 	 	} 
		// 	 }



  		
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