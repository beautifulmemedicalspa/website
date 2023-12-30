const slider = $(".slider");
const slideWidth = $(".slide").outerWidth();
let currentPosition = 0;

function autoScroll() {
	currentPosition -= slideWidth;
	if (currentPosition < -slideWidth * ($(".slide").length - 1)) {
		currentPosition = 0;
	}
	slider.css("transform", `translateX(${currentPosition}px)`);
}

// Set an interval for autoscrolling (e.g., every 3 seconds)
const autoScrollInterval = setInterval(autoScroll, 5000);

// Stop autoscrolling on hover
$(".slider-container").hover(
	function () {
		clearInterval(autoScrollInterval);
	},
	function () {
		autoScrollInterval = setInterval(autoScroll, 5000);
	}
);
