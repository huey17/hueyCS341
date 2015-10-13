/**
 * ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 *
 */

var librs = librs || {};
librs.ui = {};
librs.ui = function() {

	// fetch helps get specific inputs displayed by year
	var fetch = function() {
		var yearFetcher = document.getElementById('year');
		var value = yearFetcher.value;
		console.log(value);

		//note to self. it is viz, not vis (this is what caused me so many delays)
		vizController(value);
	};

	var counter = 1;

	var toggle = function() {

		console.log('About!');

		// Grab the html element with the ID “about”
		var el = document.getElementById('about');

		if (counter % 2) {
			console.log('TOGGLE ON');
			// Add the class “show” to the element.
			addClass(el, 'show');
		} else {
			console.log('TOGGLE OFF');
			removeClass(el, 'show');
		}
		counter = counter + 1;

	};

	var initialize = function() {

		console.log('Initialize!');

		// Grab the 'About' button element, identified by the
		// 'about-btn' id.
		var button = document.getElementById('about-btn');

		// From this point forward, when the button is clicked, the
		// toggle function shall be invoked.
		button.onclick = toggle;

		// Grab the 'Submit' button element, identified by the
		// 'submit-btn' id.
		submitButton = document.getElementById('submit-btn');

		// From this point forward, when the button is clicked, the
		// fetch function shall be invoked.
		submitButton.onclick = fetch;
	};

	// When this file is included at the bottom of the page,
	// the js is loaded after the DOM is loaded.  It is a
	// good time to initialize the UI elements in the page.
	initialize();

};
// end module

// Invoke module. After invocation, the module’s code is now added to
// the namespace and is accessible through the librs object.
librs.ui();

