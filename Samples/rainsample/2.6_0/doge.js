
if (intervalDoge != undefined && intervalDoge != '') {
	clearInterval(intervalDoge);
	intervalDoge = ''
}

else {
	// start intervalDoge
	var intervalDoge = setInterval(function() {


		// this runs every second

		var $DogeDiv = $('<div class="rom-doge rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($DogeDiv);

		$DogeDiv.css('left', $leftpos + 'px')

		$DogeDiv.css({top: $(document).scrollTop() - 100});

		$DogeDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Doge
		$(this).remove();

	});

	}, 100);
}