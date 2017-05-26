
if (intervalNugget != undefined && intervalNugget != '') {
	clearInterval(intervalNugget);
	intervalNugget = ''
}

else {
	// start intervalNugget
	var intervalNugget = setInterval(function() {


		// this runs every second

		var $nuggetDiv = $('<div class="rom-nugget rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($nuggetDiv);

		$nuggetDiv.css('left', $leftpos + 'px')

		$nuggetDiv.css({top: $(document).scrollTop() - 100});

		$nuggetDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the nugget
		$(this).remove();

	});

	}, 100);
}