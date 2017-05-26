
if (intervalBurger != undefined && intervalBurger != '') {
	clearInterval(intervalBurger);
	intervalBurger = ''
}

else {
	// start interval
		var intervalBurger = setInterval(function() {

		// this runs every second

		var $BurgerDiv = $('<div class="rom-burger rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($BurgerDiv);

		$BurgerDiv.css('left', $leftpos + 'px')

		$BurgerDiv.css({top: $(document).scrollTop() - 100});

		$BurgerDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}