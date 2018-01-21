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
		$('#hamburger').css('transform', 'rotate(90deg)');
		$('#hamburger').css('transition', '.3s');


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

		$('#hamburger').css('transform', 'rotate(0deg)');
		$('#hamburger').css('transition', '.3s');
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
			$('#hamburgerHome').css('display','none');

		}

	});

	let imgOverlay = document.getElementsByClassName("close")[0];


	imgOverlay.onclick = function() { 
  		$('#img-overlay').hide();
  		$('body').removeClass('noscroll');
  		$('#hamburgerHome').css('display','block');
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



//Footer

footerLinkArray = ['https://www.linkedin.com/in/chloekng', 'https://www.instagram.com/gloweeing', 'https://www.pinterest.com/chloeeeing', 'https://medium.com/@chloeng'];
footerSvgArray = ['M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z', 'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z', 'M13,16.2C12.2,16.2 11.43,15.86 10.88,15.28L9.93,18.5L9.86,18.69L9.83,18.67C9.64,19 9.29,19.2 8.9,19.2C8.29,19.2 7.8,18.71 7.8,18.1C7.8,18.05 7.81,18 7.81,17.95H7.8L7.85,17.77L9.7,12.21C9.7,12.21 9.5,11.59 9.5,10.73C9.5,9 10.42,8.5 11.16,8.5C11.91,8.5 12.58,8.76 12.58,9.81C12.58,11.15 11.69,11.84 11.69,12.81C11.69,13.55 12.29,14.16 13.03,14.16C15.37,14.16 16.2,12.4 16.2,10.75C16.2,8.57 14.32,6.8 12,6.8C9.68,6.8 7.8,8.57 7.8,10.75C7.8,11.42 8,12.09 8.34,12.68C8.43,12.84 8.5,13 8.5,13.2A1,1 0 0,1 7.5,14.2C7.13,14.2 6.79,14 6.62,13.7C6.08,12.81 5.8,11.79 5.8,10.75C5.8,7.47 8.58,4.8 12,4.8C15.42,4.8 18.2,7.47 18.2,10.75C18.2,13.37 16.57,16.2 13,16.2M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z', 'M21.93,6.62L15.89,16.47L11.57,9.43L15,3.84C15.17,3.58 15.5,3.47 15.78,3.55L21.93,6.62M22,19.78C22,20.35 21.5,20.57 20.89,20.26L16.18,17.91L22,8.41V19.78M9,19.94C9,20.5 8.57,20.76 8.07,20.5L2.55,17.76C2.25,17.6 2,17.2 2,16.86V4.14C2,3.69 2.33,3.5 2.74,3.68L8.7,6.66L9,7.12V19.94M15.29,17.46L10,14.81V8.81L15.29,17.46Z'];

for (let i = 0; i < (footerLinkArray.length); i++) {
	
	let footerLink = document.createElement('a');
	footerLink.href = footerLinkArray[i];
	footerLink.className = 'contact-icon';
	footerLink.setAttribute('target', '_blank');


	let svgContact = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svgContact.setAttribute('viewBox', '0 0 24 24');
	svgContact.setAttribute('width', '28px');
	svgContact.setAttribute('height', '24px');
	svgContact.setAttribute('class', 'contact-icon');

	let svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	svgPath.setAttribute('d', footerSvgArray[i]);
	svgPath.setAttribute('class', 'contact-icon');

	svgContact.append(svgPath);
	footerLink.append(svgContact);

	$('#contact').append(footerLink);

}

let emailDiv = document.createElement('div');
emailDiv.id = 'email';
emailText = document.createTextNode('NGKCHLOE@GMAIL.COM');
emailDiv.append(emailText);
$('#contact').append(emailDiv);

let copyright = document.createTextNode('\251 CHLOE NG 2018');

$('#copyright').append(copyright);

	


});    