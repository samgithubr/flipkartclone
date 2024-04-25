
let f = document.getElementById("f");



function myFunction() {
	var x = document.getElementById("p");
	var plus = document.getElementById("pl");
	var minus = document.getElementById("mi")
	if (x.style.display === "none") {
	  x.style.display = "block";
	  plus.style.display="none";
	  minus.style.display="block";
	} else {
	  x.style.display = "none";
	  plus.style.display="block";
	  minus.style.display="none"
	}
  }






























/*window.onload = function () { 
	let slides = 
		document.getElementsByClassName('carousel-item'); 

	function addActive(slide) { 
		slide.classList.add('active'); 
	} 

	function removeActive(slide) { 
		slide.classList.remove('active'); 
	} 

	addActive(slides[0]); 
	setInterval(function () { 
		for (let i = 0; i < slides.length; i++) { 
			if (i + 1 == slides.length) { 
				addActive(slides[0]); 
				setTimeout(removeActive, 1500, slides[i]); 
				break; 
			} 
			if (slides[i].classList.contains('active')) { 
				setTimeout(removeActive, 1500, slides[i]); 
				addActive(slides[i + 1]); 
				break; 
			} 
		} 
	}, 1500); 
};

window.onload = function()
{}
*/