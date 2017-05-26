
if (intervalUnicorn != undefined && intervalUnicorn != '') {
	clearInterval(intervalUnicorn);
	intervalUnicorn = ''
}

else {
	// start interval
		var intervalUnicorn = setInterval(function() {

		// this runs every second

		var $UnicornDiv = $('<div class="rom-unicorn rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($UnicornDiv);

		$UnicornDiv.css('left', $leftpos + 'px')

		$UnicornDiv.css({top: $(document).scrollTop() - 100});

		$UnicornDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}
