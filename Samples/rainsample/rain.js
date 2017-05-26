
if (intervalRain != undefined && intervalRain != '') {
	clearInterval(intervalRain);
	intervalRain = ''
}

else {
	// start interval
		var intervalRain = setInterval(function() {

		// this runs every second

		var $RainDiv = $('<div class="rom-rain rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($RainDiv);

		$RainDiv.css('left', $leftpos + 'px')

		$RainDiv.css({top: $(document).scrollTop() - 100});

		$RainDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}