
if (intervalCool != undefined && intervalCool != '') {
	clearInterval(intervalCool);
	intervalCool = ''
}

else {
	// start interval
		var intervalCool = setInterval(function() {

		// this runs every second

		var $CoolDiv = $('<div class="rom-cool rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($CoolDiv);

		$CoolDiv.css('left', $leftpos + 'px')

		$CoolDiv.css({top: $(document).scrollTop() - 100});

		$CoolDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}