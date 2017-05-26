
if (intervalPizza != undefined && intervalPizza != '') {
	clearInterval(intervalPizza);
	intervalPizza = ''
}

else {
	// start interval
		var intervalPizza = setInterval(function() {

		// this runs every second

		var $PizzaDiv = $('<div class="rom-pizza rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($PizzaDiv);

		$PizzaDiv.css('left', $leftpos + 'px')

		$PizzaDiv.css({top: $(document).scrollTop() - 100});

		$PizzaDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}