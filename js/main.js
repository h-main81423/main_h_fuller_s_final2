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
	const current = document.querySelector("#current");
	const imgs = document.querySelectorAll(".galleryImgs img");



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

		e.currentTarget.classList.toggle('clicked');

		e.currentTarget.nextElementSibling.classList.toggle('opened');
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

})();