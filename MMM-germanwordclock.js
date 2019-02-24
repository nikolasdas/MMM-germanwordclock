/* Word Clock written in German */

/* Magic Mirror
 * Module: German Word Clock
 *
 * Original bern dialect version by Sebastian Plattner https://www.sebastianplattner.ch
 * MIT Licensed.
 */

Module.register("MMM-germanwordclock",{

	// Define module defaults
	defaults: {
		updateInterval: 1000,
		
	},

	// Define required scripts.
	getStyles: function() {
		return ["germanwordclock.css"];
	},

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Set locale.
		moment.locale(config.language);

		this.elements = [];

		this.elements["hour1"] = "hour1";
		this.elements["hour2"] = "hour2";
		this.elements["hour3"] = "hour3";
		this.elements["hour4"] = "hour4";
		this.elements["hour5"] = "hour5";
		this.elements["hour6"] = "hour6";
		this.elements["hour7"] = "hour7";
		this.elements["hour8"] = "hour8";
		this.elements["hour9"] = "hour9";
		this.elements["hour10"] = "hour10";
		this.elements["hour11"] = "hour11";
		this.elements["hour12"] = "hour12";

		this.elements["befor"] = "befor";
		this.elements["past"] = "past";

		this.elements["full"] = "full";
		this.elements["five"] = "five";
		this.elements["ten"] = "ten";
		this.elements["quarter"] = "quarter";
		this.elements["twenty"] = "twenty";
		this.elements["half"] = "half";

		this.elements["it"] = "it";
		this.elements["is"] = "is";

		// Set Interval for Update
		var self = this;
		setInterval(function() {
			self.updateWordClock();
		}, this.config.updateInterval);
	},

	updateWordClock: function() {

		this.resetWordClock();

    	        var currentTime = moment();
    	        var elements = ["it","is"];

		var hour = currentTime.hour() % 12;
		var minute = currentTime.minute();

		if (minute >= 0 && minute < 5) { elements.push("full");}
		if (minute >= 5 && minute < 10) { elements.push("five","past"); }
		if (minute >= 10 && minute < 15) { elements.push("ten","past"); }
		if (minute >= 15 && minute < 20) { elements.push("quarter","past"); }
		if (minute >= 20 && minute < 25) { elements.push("twenty","past"); }
		if (minute >= 25 && minute < 30) {
			elements.push("five","befor","half");
			hour = (hour + 1) % 12;
		}

		if (minute >= 30 && minute < 35) {
			elements.push("half");
			hour = (hour + 1) % 12;
		}

		if (minute >= 35 && minute < 40) {
			elements.push("five","past","half");
			hour = (hour + 1) % 12;
		}

		if (minute >= 40 && minute < 45) {
			elements.push("twenty","befor");
			hour = (hour + 1) % 12;
		}

		if (minute >= 45 && minute < 50) {
			elements.push("quarter","befor");
			hour = (hour + 1) % 12;
		}

		if (minute >= 50 && minute < 55) {
			elements.push("ten","befor");
			hour = (hour + 1) % 12;
		}

		if (minute >= 55 ) {
			elements.push("five","befor");
			hour = (hour + 1) % 12;
		}


		elements.push(this.setHour(hour));

		this.changeToAchtive(elements);
	}, 
	
	setHour: function(hour) {

		switch(hour) {
			case 0:
				return "hour12";
			case 1:
				return "hour1";
			case 2:
				return "hour2";
			case 3:
				return "hour3";
			case 4:
				return "hour4";
			case 5:
				return "hour5";
			case 6:
				return "hour6";
			case 7:
				return "hour7";
			case 8:
				return "hour8";
			case 9:
				return "hour9";
			case 10:
				return "hour10";
			case 11:
				return "hour11";
			case 12:
				return "hour12";
		}
	},

	resetWordClock: function() {

		for (var i in this.elements) {
			var item = document.getElementById(this.elements[i]);
			item.className = "";
		}

	},

	changeToAchtive: function(elements) {
		for (var i in elements) {
			var item = document.getElementById(this.elements[elements[i]]);
			item.className = "white";
		}
	},
    
	// Override dom generator.
	getDom: function() {

		var wrapper = document.createElement("div");
        // 11 letters per line
		wrapper.innerHTML = "&nbsp;<span id=\"it\">E S</span> K<span id=\"is\"> I S T </span> A <span id=\"five\">K U R Z</span>&nbsp;<br />" +
								"&nbsp;<span id=\"ten\">Z E H N</span> <span id=\"quarter\">V I E R T E L</span>&nbsp;<br />" +
								"&nbsp;<span id=\"twenty\">Z W A N Z I G </span>S P Ä T&nbsp;<br />" +
                                "&nbsp;<span id=\"befor\">V O R</span> N U L L <span id=\"past\">N A C H</span>&nbsp;<br />" +
                                "&nbsp;<span id=\"half\">H A L B </span> T A U <span id=\"hour1\">E I N S</span>&nbsp;<br />" +
                                "&nbsp;<span id=\"hour4\">V I E R</span> S T <span id=\"hour12\">Z W Ö L F </span>&nbsp;<br />" +
								"&nbsp;<span id=\"hour6\">S E C H S </span><span id=\"hour7\">S I E B E N</span>&nbsp;<br />" +
								"&nbsp;<span id=\"hour3\">D R E I </span><span id=\"hour5\">F Ü N F </span><span id=\"hour11\">E L F</span>&nbsp;<br />" +
                                "&nbsp;<span id=\"hour9\">N E U N </span>P I <span id=\"hour2\">Z W E I</span> N&nbsp;<br />" +
                                "&nbsp;<span id=\"hour8\">A C H T </span><span id=\"hour10\">Z E H N </span><span id=\"full\">U H R</span>&nbsp;<br />";

		return wrapper;
	}
});




