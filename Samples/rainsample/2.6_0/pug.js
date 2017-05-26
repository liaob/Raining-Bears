
if (intervalPug != undefined && intervalPug != '') {
	clearInterval(intervalPug);
	intervalPug = ''
}

else {
	// start intervalPug
	var intervalPug = setInterval(function() {


		// this runs every second

		var $pugDiv = $('<div class="rom-pug rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($pugDiv);

		$pugDiv.css('left', $leftpos + 'px')

		$pugDiv.css({top: $(document).scrollTop() - 100});

		$pugDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the pug
		$(this).remove();

	});

	}, 100);
}