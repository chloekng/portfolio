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
	navLink.href = menuLink;

	let navSpan = document.createElement('span');
	navSpan.className = 'navitemName';
	navSpan.innerHTML = menuItem;

	navLink.append(navSpan);

	navBar.append(navLink);


}

//puts the menu items into navbar 

var makeMenuItems = function(navBar) {
	let menuLinkArray = ['about', 'fun', 'index'];
	let menuItemArray = ['About', 'Fun', 'Home'];

	for (let i = 0; i < (menuLinkArray.length); i++) {
		makeMenuItem(menuLinkArray[i], navBar, menuItemArray[i])
	}

}

//makes list version of menu items

var hamburgerMenuList = function(menuLink, menuItem) {

	for (let i = 0; i < 3; i++) {
		let burgerLink = document.createElement('a');
		burgerLink.href = menuLink;
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
		var menuItemArray = ['Home', 'Fun', 'About'];


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

footerLinkArray = ['https://www.linkedin.com/in/chloekng', 'https://www.instagram.com/gloweeing', 'https://medium.com/@chloeng', 'https://dribbble.com/chloeng'];
footerSvgArray = ["M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z",
'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z",
'M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z']

for (let i = 0; i < (footerLinkArray.length); i++) {
	
	let footerLink = document.createElement('a');
	footerLink.href = footerLinkArray[i];
	footerLink.className = 'contact-icon';
	footerLink.setAttribute('target', '_blank');


	let svgContact = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

	svgContact.setAttribute('viewBox', '0 0 24 24');
	svgContact.setAttribute('width', '32px');
	svgContact.setAttribute('height', '20px');
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