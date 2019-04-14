(() => {

	//CHECK IF LINKED
	console.log("fired");

	//VARIABLE DECLARATIONS

	//variables for menu
	var button = document.querySelector("#burger");
	var burgerCon = document.querySelector("#burgerCon");
	//variables for returning to top of page
	var goTopBtn = document.querySelector("#return");
	//menu dropdown code
	var accordion =  document.querySelectorAll(".toggle");
	//gallery variables
	const current = document.querySelector(".current");
	const imgs = document.querySelectorAll(".galleryImgs img");
	//variable to keep selected images opaque in the preview area
	const opacity = 0.7;

	//FUNCTIONS

	//menu function, drop down.
	function menu() {
		burgerCon.classList.toggle("open");
		button.classList.toggle("expanded");
	}

	//function for setting up scroll, selecting the window and the Y offset
	function returnToTop() {
		//scroll variable, pins where on the page user is.
	    var scrolling = window.pageYOffset;
	    //coordinate variable, gets height of page
	    var coords = document.documentElement.clientHeight;

	  }
	 //scrolling to top
	function toStart() {
		//logs when the function is called
		console.log('scroll fired');

		//if user is more than 0px down the window will scroll back to the top.
	    if (window.pageYOffset > 0) {
	      window.scrollBy(0, -80);
	      setTimeout(toStart, 0);
	    }

	  }

	//drop down menu for newsletters
	function dropdown(e) {

		console.log("dropdown menu called");
		//add class list of clicked to 'e'
		e.currentTarget.classList.toggle('clicked');
		//pick the element next from the element selected and add a class list of opened to it
		e.currentTarget.nextElementSibling.classList.toggle('opened');
	}

	//img function
	function imgClick(e) {
		//styling
		//make the first image in the gallery thumbnail section selected
		imgs[0].style.opacity = opacity;

		//reset the opacity to prevent clicked image from remaining 'clicked'
		imgs.forEach(img => img.style.opacity = 1);

		//change the image source to the source of the clicked image
		current.src = e.target.src;

		//add the fade in class for animation, will run it once.
		current.classList.add('fade-in');

		//remove class after fade in animation so it will run more than once.
		setTimeout(() => current.classList.remove('fade-in'), 500);

		//change the opacity to opacity variable value by styling the target.
		e.target.style.opacity = opacity;
	}



	//EVENT HANDLING

	//menu event
	button.addEventListener("click", menu, false);

	//dropdown event
	for(var i=0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", dropdown);
	}

	  window.addEventListener('scroll', returnToTop);
	  goTopBtn.addEventListener('click', toStart);

	//gallery event listeners
	//clicking on thumbnails
	imgs.forEach(img => img.addEventListener('click', imgClick));

})();