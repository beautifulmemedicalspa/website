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
