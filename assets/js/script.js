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

//MENU SHIT//

// makes a hamburger 

var makeHamburger = function(navBar) {

	if (!$('#hamburgerHome').length) {
		var hamburgerDiv = document.createElement("div");
		hamburgerDiv.id = "hamburgerHome";
		// hamburgerDiv.className = "navitem";

		//creates svg of hamburger
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("viewBox", "1 0 24 24");
		svg.setAttribute("x", "0");
		svg.setAttribute("y", "0");
		svg.id = "hamburger";
		svg.setAttribute("style", "enable-background:new 0 0 24 24;");
		svg.setAttribute("xml:space", "preserve");

		//draws each of the lines of a hamburger
		let posArray = [5, 11, 17];


		for (let i = 0; i < 3; i++) {
			var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttribute("x", "6");
			rect.setAttribute("y", posArray[i]);

			rect.setAttribute("width", "14");
			rect.setAttribute("height", "2");

			svg.append(rect);

		}

		//adds break to end of hamburger
		// let newBreak = document.createElement('br');
		// svg.append(newBreak);

		hamburgerDiv.append(svg);
		console.log(hamburgerDiv);

		//appends hamburger 
		navBar.append(hamburgerDiv);

	}
}


//makes a menu item

var makeMenuItem = function(menuLink, navBar, menuItem) {


	let navLink = document.createElement('a');
	navLink.className = 'navitem';
	navLink.href = menuLink + '.html';

	let navSpan = document.createElement('span');
	navSpan.className = 'navitemName';
	navSpan.innerHTML = menuItem;

	navLink.append(navSpan);

	navBar.append(navLink);


}

//puts the menu items into navbar 

var makeMenuItems = function(navBar) {
	let menuLinkArray = ['about', 'fun', 'index'];
	let menuItemArray = ['About', 'Fun', 'Work'];

	for (let i = 0; i < (menuLinkArray.length); i++) {
		makeMenuItem(menuLinkArray[i], navBar, menuItemArray[i])
	}

}

//makes list version of menu items

var hamburgerMenuList = function(menuLink, menuItem) {

	for (let i = 0; i < 3; i++) {
		let burgerLink = document.createElement('a');
		burgerLink.href = menuLink + '.html';
		burgerLink.className = 'navitem h3';

		let burgerSpan = document.createElement('span');


		let burgerText = document.createTextNode(menuItem)
		burgerSpan.append(burgerText);
		burgerLink.append(burgerSpan);

		return burgerLink;

	}


}


//creates a navbar

var navBar = document.querySelector('.menu');


//responsive menu
 
if ($(window).width() <= 600) {

	makeMenuItems(navBar);	
	makeHamburger(navBar);

	//hide menu items when screen is small
	$('.menu .navitem').css('display', 'none');

	//scroll behavior for when screen is small - hamburger should never disappear
	$(window).on('scroll', function() {

		if ($(window).scrollTop() === 0) {
			$('#hamburgerHome').css('position', 'relative');
			$('#hamburgerHome').css('top', '0%');
			$('#hamburgerHome').css('right', '0%');

		} else {
			$('#hamburgerHome').css('position', 'fixed');
			$('#hamburgerHome').css('top', '4%');
			$('#hamburgerHome').css('right', '10%');
		}

	});


//when screen is large
} else {

	makeMenuItems(navBar);	
	makeHamburger(navBar);

	$('#hamburgerHome').css('display', 'none');


	//scroll behavior for when screen is large - hamburger appears & disappears when scrolled up
	$(window).on('scroll', function() {

		if ($(window).scrollTop() <= 40) {

			//hide hamburger when screen is large
			$('#hamburgerHome').css('display', 'none');

			$('#hamburgerHome').css('position', 'relative');
			$('#hamburgerHome').css('top', '0%');
			$('#hamburgerHome').css('right', '0%');

		} else {
			$('#hamburgerHome').css('display', 'block');
			$('#hamburgerHome').css('position', 'fixed');
			$('#hamburgerHome').css('top', '4%');
			$('#hamburgerHome').css('right', '10%');
		}


	});



}


//sidebar-l behavior
$(window).on('scroll', function() {
	console.log("hey scroll");

	//getting side nav to appear
	if ((window.pageYOffset + 300) > (document.body.offsetHeight - window.innerHeight)) {
		$('.sidebar-l').css('display', 'none');

	} else if (window.pageYOffset >= window.innerHeight) {

		$('.sidebar-l').css('display', 'block');

		
	} else if (window.pageYOffset < window.innerHeight) {
		$('.sidebar-l').css('display', 'none');
	}


	var position = $(this).scrollTop();

    $('.project-writeup .h3').each(function() {
        var thisSection = $(this).attr('id');
        var sectionTop = $(this).offset().top;
        // var headingToChange = projHeadingPos[thisSection];


        if (position >= sectionTop) {
        	$('#' + thisSection).css('background-position', 'left');
        } else {
        	$('#' + thisSection).css('background-position', 'right');

        }
    });
});


//hamburger menu behavior
var hamburgerMenu = false; 
var menuOpen = false;

$('#hamburger').on('click', function(event) {

	//if the hamburger menu isn't open
	if (hamburgerMenu === false && menuOpen === false)  {


		$('#hamburger').css('fill', 'var(--color)');
		$('#hamburger').css('animation', 'burgerrotate .3s ease-in');

		var menuLinkArray = ['index', 'fun', 'about'];
		var menuItemArray = ['Work', 'Fun', 'About'];


		//making hamburger list
		for (let i = 0; i < menuLinkArray.length; i++) {
			let newBreak = document.createElement('br');
			$('#hamburgerMenuList').append(newBreak, hamburgerMenuList(menuLinkArray[i], menuItemArray[i]));
		}

		$('#hamburgerMenu').append($('#hamburgerMenuList'));

		$('#hamburgerMenu').css('display', 'block');
		$('body').addClass('noscroll');

		hamburgerMenu = true;
		menuOpen = true;



	//if hamburger menu is open and clicked on 
	} else if (hamburgerMenu === true && menuOpen === true) {

		$('#hamburgerMenu a').remove();
		$('#hamburgerMenu br').remove();


		hamburgerMenu = false;
		menuOpen = false;

		$('#hamburger').css('animation', 'burgerrotateleave .3s ease-in');
		$('#hamburger').css('fill', 'black');
		$('body').removeClass('noscroll');
		$('#hamburgerMenu').css('display', 'none');

	}


})


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





// // Project Scroll


	var projHeading = document.querySelectorAll('.project-writeup .h3');
	var projSide = [];
	var headingPos = [];
	var projHeadingPos = {};
	


	//making sidebar-l
	for (let i = 0; i < (projHeading.length-1); i++) {

		//getting the position & pushing to array
		// headingPos.push($(projHeading[i]).offset().top);
		// let thisProjHeadingPos = $(projHeading[i]).offset().top;
		// projHeadingPos[$(projHeading[i]).attr('id')] = thisProjHeadingPos;

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









// Smooth Scroll

  // Add smooth scrolling to all links
  $('a').on('click', function(event) {


    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.getAttribute('id');
      console.log(hash);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $('#' + hash + '.h3').offset().top
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