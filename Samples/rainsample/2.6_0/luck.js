
if (intervalLuck != undefined && intervalLuck != '') {
	clearInterval(intervalLuck);
	intervalLuck = ''
}

else {
	// start interval
	var intervalLuck = setInterval(function() {

		// this runs every second

		var $LuckDiv = $('<div class="rom-luck rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($LuckDiv);

		$LuckDiv.css('left', $leftpos + 'px')

		$LuckDiv.css({top: $(document).scrollTop() - 100});

		$LuckDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}