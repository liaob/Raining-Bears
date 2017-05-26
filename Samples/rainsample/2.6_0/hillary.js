
if (intervalHillary != undefined && intervalHillary != '') {
	clearInterval(intervalHillary);
	intervalHillary = ''
}

else {
	// start interval
		var intervalHillary = setInterval(function() {

		// this runs every second

		var $HillaryDiv = $('<div class="rom-hillary rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($HillaryDiv);

		$HillaryDiv.css('left', $leftpos + 'px')

		$HillaryDiv.css({top: $(document).scrollTop() - 100});

		$HillaryDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}
