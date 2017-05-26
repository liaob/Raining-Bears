
if (intervalTash != undefined && intervalTash != '') {
	clearInterval(intervalTash);
	intervalTash = ''
}

else {
	// start intervalTash
	var intervalTash = setInterval(function() {


		// this runs every second

		var $TashDiv = $('<div class="rom-tash rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($TashDiv);

		$TashDiv.css('left', $leftpos + 'px')

		$TashDiv.css({top: $(document).scrollTop() - 100});

		$TashDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Tash
		$(this).remove();

	});

	}, 100);
}