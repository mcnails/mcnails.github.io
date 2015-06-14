//init function
$(function() {
	showHours();
	showMenu();
	smoothScroll(1000);
	startMap();
})


//Sliding in sections when visible
var win = $(window);
var allSects = $(".section")
win.scroll(function(event) {
	if (win.width() > 505) {
		allSects.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("come-in");
			}
		});
	};
});


var hoursHidden = true;
//Slide in hours when clicked
function showHours() {
	$('.nav-item-hours').click(function() {
		if (win.width() <=1199) {
			if (hoursHidden){
				$('.side-bar').css('height', '+=110px');
				$('.hours').css('transform', 'translate(0, 20px)');
				$('.hours').css('opacity', '0.9');
				hoursHidden = false;
			}
			else {
				$('.side-bar').css('height', '-=110px');
				$('.hours').css('transform', 'translate(0, -15px)');
				$('.hours').css('opacity', '0');
				hoursHidden = true;
			}
		}
		else {
			if (hoursHidden){
				$('.hours').css('transform', 'translate(50px, 20px)');
				$('.hours').css('opacity', '0.9');
				hoursHidden = false;
			}
			else {
				$('.hours').css('transform', 'translate(50px, -15px)');
				$('.hours').css('opacity', '0');
				hoursHidden = true;
			}

		}
	})
}


function showMenu() {
	var menuHidden = true;
	$('.navbar-button').click(function() {

		if (win.width() <= 768) { 
			if (menuHidden) {
				$('.nav').css('transform', 'translate(0, 0)');
				$('.side-bar').css('height', '+=225px');
				menuHidden = false;
			}
			else {
				$('.nav').css('transform', 'translate(0, 15px)');
				if (hoursHidden) {
					$('.side-bar').css('height', '-=225px');
				}
				else {
					$('.side-bar').css('height', '-=335px');
					$('.hours').css('transform', 'translate(0, -15px)');
					$('.hours').css('opacity', '0');
					hoursHidden = true;
				}
				menuHidden = true;
			}
		}

		else {
			if (menuHidden) {
				$('.nav').css('transform', 'translate(0, 0)');
				$('.nav').css('opacity', '0.9');
				$('.side-bar').css('height', '+=235px');
				menuHidden = false;
			}
			else {
				$('.nav').css('transform', 'translate(0, 40px)');
				$('.nav').css('opacity', '0');
				if (hoursHidden) {
					$('.side-bar').css('height', '-=235px');
				}
				else {
					$('.side-bar').css('height', '-=345px');
					$('.hours').css('transform', 'translate(0, -15px)');
					$('.hours').css('opacity', '0');
					hoursHidden = true;
				}
				menuHidden = true;
			}
		}
	})
}


//Smooth scrolling through page
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );

		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}

	});
}


//Initialize Map and Marker
function startMap() {
	var mapCanvas = document.getElementById('map-canvas')
	var mapOptions = {
		center: new google.maps.LatLng(38.8641, -77.2782462),
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(38.8630683, -77.2780558),
		map: map,
		icon: '../img/cur-location.png'
	});
}