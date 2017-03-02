function Stopwatch() {
	// private variables
	var currentTime = 0;
	var interval;
	var offset;

	// private functions
	function update() {}
	function delta() {}
	function formatTime() {}

	// public
	this.isOn = false;
	this.start = function() {
		// only run if time is not currently running
		if (this.isOn == false) {
			interval = setInterval(update, 10);
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
	};
}