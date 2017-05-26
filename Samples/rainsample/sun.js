
if (intervalSun != undefined && intervalSun != '') {
	clearInterval(intervalSun);
	intervalSun = ''
}

else {
	// start interval
		var intervalSun = setInterval(function() {

		// this runs every second

		var $SunDiv = $('<div class="rom-sun rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($SunDiv);

		$SunDiv.css('left', $leftpos + 'px')

		$SunDiv.css({top: $(document).scrollTop() - 100});

		$SunDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}