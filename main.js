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
		$start.html('START');
	}

	else {
		watch.start();
		$start.html('STOP');
	}
});

// on click of reset button
$reset.on('click', function() {

	if (watch.isOn == false) {
		// reset watch
		watch.reset();
	}
});
