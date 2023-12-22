function toggleSubContent(element) {
	var subContent = element.querySelector(".sub-content");
	var dropdownIndicator = element.querySelector(".dropdown-indicator");

	if (subContent.style.display === "none") {
		subContent.style.display = "block";
		dropdownIndicator.style.transform = "rotate(180deg)";
		element.classList.add("active");
	} else {
		subContent.style.display = "none";
		dropdownIndicator.style.transform = "rotate(0deg)";
		element.classList.remove("active");
	}
}

const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);


const update = function (newActive) {
	const newActiveIndex = elems.indexOf(newActive);

	elems.forEach((item, index) => {
		// Remove the active class from all items
		item.classList.remove("carousel__item_active");

		// Update the position
		const position = index - newActiveIndex;

		// Set the new position
		item.dataset.pos = position;

		// Add active class to the new active item
		if (position === 0) {
			item.classList.add("carousel__item_active");
		}
	});
};
const getPos = function (current, active) {
	const diff = current - active;

	if (Math.abs(current - active) > 2) {
		return -current;
	}

	return diff;
};
// Function to find the index of the current active item
const findActiveIndex = (items) => {
	for (let i = 0; i < items.length; i++) {
		if (items[i].classList.contains("carousel__item_active")) {
			return i;
		}
	}
	return -1; // Return -1 if no active item is found
};


// Function to advance the carousel to the next item
const advanceCarousel = function () {
	try {
		console.log("Advancing carousel"); // Log to track execution
		const currentIndex = findActiveIndex(elems);
		let nextIndex = currentIndex + 1;

		// If at the end, loop back to the first item
		if (nextIndex >= elems.length) {
			nextIndex = 0;
		}

		const newActive = elems[nextIndex];
		console.log(`Current index: ${currentIndex}, Next index: ${nextIndex}`); // Log indexes
		update(newActive);
	} catch (error) {
		console.error("Error in advanceCarousel:", error); // Log any errors
	}
};

// Ensure the first item is active initially
if (elems.length > 0 && findActiveIndex(elems) === -1) {
	elems[0].classList.add("carousel__item_active");
}

// Automatically advance the carousel every 3 seconds (3000 milliseconds)
setInterval(advanceCarousel, 5000);