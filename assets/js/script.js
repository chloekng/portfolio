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


	//making sidebar-l
	for (let i = 0; i < (projHeading.length-1); i++) {

		//getting the position & pushing to array
		headingPos.push($(projHeading[i]).offset().top);

		//creating sidebar element
		let newHeading = document.createElement('a');
		let newBreak = document.createElement('br');
		newHeading.className = 'h4';
		let newHeadingText = document.createTextNode(projHeading[i].innerHTML);


		//setting link destination
		newHeading.href = '#' + projHeading[i].id;

		//attaching to the appropriate things
		newHeading.append(newHeadingText);
		$('.sidebar-l').append(newHeading, newBreak);
		projSide.push(newHeading);





	}


	var winHeight = $(window).height(),
  		docHeight = $(document).height();
  	max = docHeight - winHeight;



	$(window).on('scroll', function() {

  		if ((window.pageYOffset + 300) > (document.body.offsetHeight - window.innerHeight)) {
			$('.sidebar-l').css('display', 'none');
		} else if (window.pageYOffset >= window.innerHeight) {
			$('.sidebar-l').css('display', 'block');
			$('.sidebar-r').css('display', 'block');			
		} else if (window.pageYOffset < window.innerHeight) {
			$('.sidebar-l').css('display', 'none');
			$('.sidebar-r').css('display', 'none');			
		}

		// for (let i = 0; i < (projSide.length); i++) {
			// if (window.pageYOffset > headingPos[i]) {
			// 	$(projSide[i]).css('background-position', 'left');
		 // 		console.log(i)
		 // 	} else if (window.pageYOffset < headingPos[i]) {
		 // 		$(projSide[i]).css('background-position', 'right');
		 // 		console.log(i);
		 // 	} 
		 console.log(window.pageYOffset);
			if (window.pageYOffset < headingPos[0]) {
				$(projSide[0]).css('background-position', 'right');
			} else if (window.pageYOffset > headingPos[0] && window.pageYOffset < headingPos[1]) {
				$(projSide[0]).css('background-position', 'left');
				$(projSide[1]).css('background-position', 'right');
			} else if (window.pageYOffset > headingPos[1] && window.pageYOffset < headingPos[2]) {
				$(projSide[1]).css('background-position', 'left');
				$(projSide[2]).css('background-position', 'right');
			} else if (window.pageYOffset > headingPos[2] && window.pageYOffset < headingPos[3]) {
				$(projSide[2]).css('background-position', 'left');
				$(projSide[3]).css('background-position', 'right');				
			} else if (window.pageYOffset > headingPos[3] && window.pageYOffset < headingPos[4]) {
				$(projSide[3]).css('background-position', 'left');
				$(projSide[4]).css('background-position', 'right');	
			} else if (window.pageYOffset > headingPos[4] && window.pageYOffset < headingPos[5]) {
				$(projSide[4]).css('background-position', 'left');
				$(projSide[5]).css('background-position', 'right');	
			} else if (window.pageYOffset > headingPos[5] && window.pageYOffset < headingPos[6]) {
				$(projSide[5]).css('background-position', 'left');
				$(projSide[6]).css('background-position', 'right');	
			} else if (window.pageYOffset > headingPos[6] && window.pageYOffset < headingPos[7]) {
				$(projSide[6]).css('background-position', 'left');
				$(projSide[7]).css('background-position', 'right');	
			} else if (window.pageYOffset > headingPos[7] && window.pageYOffset < headingPos[8]) {
				$(projSide[7]).css('background-position', 'left');
				$(projSide[8]).css('background-position', 'right');	
			} else if (window.pageYOffset > headingPos[8] && window.pageYOffset < headingPos[9]) {
				$(projSide[8]).css('background-position', 'left');
				$(projSide[9]).css('background-position', 'right');	
			} else if (window.pageYOffset > headingPos[9] && window.pageYOffset < headingPos[10]) {
				$(projSide[9]).css('background-position', 'left');
				$(projSide[10]).css('background-position', 'right');	
			}
		


 



			// if (value > headingPos[i]) {
			// 	$(projSide[i]).css('background-position', 'left');
			// 	console.log(i)
			// } else if (value < headingPos[i]) {
			// 	$(projSide[i]).css('background-position', 'right');
			// 	console.log(i);

  		
   	});

	//getting sidenav to appear
	// window.onscroll = function(event) {
	// 	if ((window.pageYOffset + 300) > (document.body.offsetHeight - window.innerHeight)) {
	// 		$('.sidebar-l').css('display', 'none');
	// 	} else if (window.pageYOffset >= window.innerHeight) {
	// 		$('.sidebar-l').css('display', 'block');
	// 		$('.sidebar-r').css('display', 'block');			
	// 	} else if (window.pageYOffset < window.innerHeight) {
	// 		$('.sidebar-l').css('display', 'none');
	// 		$('.sidebar-r').css('display', 'none');			
	// 	}


	// 	// for (let i = 0; i < (projSide.length); i++) {
	// 	// 	//set i based on position in page? 
	// 	// 	//make zones based on i positions??
	// 	// 	if (window.pageYOffset > headingPos[i]) {
	// 	// 		$(projSide[i]).css('background-position', 'left');
	// 	// 		console.log(i)
	// 	// 	} else if (window.pageYOffset < headingPos[i]) {
	// 	// 		$(projSide[i]).css('background-position', 'right');
	// 	// 		console.log(i);
	// 	// 	} 
	// 	// }
	// }




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