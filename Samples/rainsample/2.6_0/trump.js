
if (intervalTrump != undefined && intervalTrump != '') {
	clearInterval(intervalTrump);
	intervalTrump = ''
}

else {
	// start interval
		var intervalTrump = setInterval(function() {

		// this runs every second

		var $TrumpDiv = $('<div class="rom-trump rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($TrumpDiv);

		$TrumpDiv.css('left', $leftpos + 'px')

		$TrumpDiv.css({top: $(document).scrollTop() - 100});

		$TrumpDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}
