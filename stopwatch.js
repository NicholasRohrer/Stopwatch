function Stopwatch(elem) {
	// private variables
	var currentTime = 0;
	var interval;
	var offset;

	// private functions
	function update() {
		// only if watch is on
		if (this.isOn) {
			currentTime = currentTime + delta();
		}
		
		var formattedTime = formatTime(currentTime);
		elem.html(formattedTime);
	}

	function delta() {

		// grab current time
		var timeNow = Date.now();

		//calculate time passed since last offset
		var passedTime = timeNow - offset;

		// reset offset to timeNow
		offset = timeNow;

		return passedTime;
	}

	function formatTime(unformatted) {
		var time = new Date(unformatted);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		// make sure same format is kept even with single digits
		if (minutes.length < 2) {
			minutes = '0' + minutes;
		}

		if (seconds.length < 2) {
			seconds = '0' + seconds;
		}

		while (milliseconds.length < 3) {
			milliseconds = '0' + milliseconds;
		}

		// return format of 00 : 00 : 000
		return minutes + ' : ' + seconds + ' : ' + milliseconds;
	}

	// public
	this.isOn = false;
	this.start = function() {
		// only run if time is not currently running
		if (this.isOn == false) {
			interval = setInterval(update.bind(this), 10);
			offset = Date.now();
			this.isOn = true;

		}
	};

	this.stop = function() {
		// only run if time is currently running
		if (this.isOn == true) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};

	this.reset = function() {
		// re-initialize time to 0
		currentTime = 0;

		update();
	};
}