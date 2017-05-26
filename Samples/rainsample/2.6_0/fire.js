
if (intervalFire != undefined && intervalFire != '') {
	clearInterval(intervalFire);
	intervalFire = ''
}

else {
	// start interval
	var intervalFire = setInterval(function() {

		// this runs every second

		var $FireDiv = $('<div class="rom-fire rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($FireDiv);

		$FireDiv.css('left', $leftpos + 'px')

		$FireDiv.css({top: $(document).scrollTop() - 100});

		$FireDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}