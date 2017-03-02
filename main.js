// cache DOM
var $time = $('#time');
var $start = $('#start');
var $reset = $('#reset');

// create new stopwatch object
var watch = new Stopwatch($time);

// on click of start button
$start.on('click', function() {

	// check if watch is on, start if not on
	if (watch.isOn == true) {
		watch.stop();
	}

	else {
		watch.start();
	}
});

// on click of reset button
$reset.on('click', function() {

	// reset watch
	watch.reset();
});
