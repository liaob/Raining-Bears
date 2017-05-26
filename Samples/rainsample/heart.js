
if (intervalHeart != undefined && intervalHeart != '') {
	clearInterval(intervalHeart);
	intervalHeart = ''
}

else {
	// start interval
		var intervalHeart = setInterval(function() {

		// this runs every second

		var $HeartDiv = $('<div class="rom-heart rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($HeartDiv);

		$HeartDiv.css('left', $leftpos + 'px')

		$HeartDiv.css({top: $(document).scrollTop() - 100});

		$HeartDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}