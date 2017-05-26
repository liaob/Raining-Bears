
if (intervalMoon != undefined && intervalMoon != '') {
	clearInterval(intervalMoon);
	intervalMoon = ''
}

else {
	// start interval
	var intervalMoon = setInterval(function() {

		// this runs every second

		var $MoonDiv = $('<div class="rom-moon rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($MoonDiv);

		$MoonDiv.css('left', $leftpos + 'px')

		$MoonDiv.css({top: $(document).scrollTop() - 100});

		$MoonDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}