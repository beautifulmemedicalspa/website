let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideractive", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " slideractive";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}
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