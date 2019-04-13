(() => {

	//CHECK IF LINKED
	console.log("fired");

	//VARIABLE DECLARATIONS

	//variables for menu
	var button = document.querySelector("#burger");
	var burgerCon = document.querySelector("#burgerCon");
	//variables for returning to top of page
	let returns = document.querySelector("#mobileFoot button");
	let targetArea;
	//menu dropdown code
	var accordion =  document.querySelectorAll(".toggle");


	//FUNCTIONS

	//menu function, drop down.
	function menu() {
		burgerCon.classList.toggle("open");
		button.classList.toggle("expanded");
	}

	//return to top function .... not sure how to get it to work though..
	function scroll(e) {
		console.log("scroll called");
		e.currentTarget.id.slice(0,-3);
		TweenLite.to(window, 1, {scrollTo:{y:`#${targetArea}`, offsetY:70, autoKill:false}} );
	}

	console.log(returns);

	//drop down menu for newsletters
	function dropdown(e) {

		console.log("dropdown menu called");

		e.currentTarget.classList.toggle('clicked');

		e.currentTarget.nextElementSibling.classList.toggle('opened');
	}
	
	//EVENT HANDLING

	//menu event
	button.addEventListener("click", menu, false);

	//for loop event listener
	for(var i=0; i < returns.length; i++){
		//link[0] access first link in node list
		returns[i].addEventListener("click", scroll);
	}

	//dropdown event
	for(var i=0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", dropdown);
	}

})();