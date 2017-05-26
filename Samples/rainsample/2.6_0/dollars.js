
if (intervalDollars != undefined && intervalDollars != '') {
	clearInterval(intervalDollars);
	intervalDollars = ''
}

else {
	// start interval
		var intervalDollars = setInterval(function() {

		// this runs every second

		var $DollarsDiv = $('<div class="rom-dollars rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($DollarsDiv);

		$DollarsDiv.css('left', $leftpos + 'px')

		$DollarsDiv.css({top: $(document).scrollTop() - 100});

		$DollarsDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}