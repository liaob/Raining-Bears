
if (intervalBalloon != undefined && intervalBalloon != '') {
	clearInterval(intervalBalloon);
	intervalBalloon = ''
}

else {
	// start interval
	var intervalBalloon = setInterval(function() {

		// this runs every second

		var $BalloonDiv = $('<div class="rom-balloon rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($BalloonDiv);

		$BalloonDiv.css('left', $leftpos + 'px')

		$BalloonDiv.css({top: $(document).scrollTop() - 100});

		$BalloonDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}