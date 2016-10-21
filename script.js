var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
	var colors = ["red", "blue", "green", "black"];
	var i = 0;
	var timer = null;
	
	var ui = {
		btnNext: null,
		carouselDiv: null,
		btnAuto: null
	};
	
	function autoTimer() {
		if (timer == null) {
			timer = setInterval(function() { 
				nextImage(); 
			}, 50);
		} else {
			stopTimer();
		}

	}

	function stopTimer() {
		clearTimeout(timer);
		timer = null;
	}

	function nextImage() {
		ui.carouselDiv.style.background = colors[i];
		i += 1;
		if (i == colors.length) {
			i = 0;
		}
	}

	function setUpViewListeners() {
		ui.btnNext = document.getElementsByClassName("js-carousel-btn-next")[0];
		ui.carouselDiv = document.getElementsByClassName("js-carousel-image")[0];
		ui.btnAuto = document.getElementsByClassName("js-carousel-btn-auto")[0];

		ui.btnNext.onclick = function(e) {
			stopTimer();
			nextImage();
			return false;
		};

		ui.btnAuto.onclick = function(e) {
			autoTimer();
			return false;
		};
	}

	function init() {
		setUpViewListeners();
		nextImage();
	}

init();

});