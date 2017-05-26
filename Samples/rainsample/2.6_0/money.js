
if (intervalMoney != undefined && intervalMoney != '') {
	clearInterval(intervalMoney);
	intervalMoney = ''
}

else {
	// start interval
		var intervalMoney = setInterval(function() {

		// this runs every second

		var $MoneyDiv = $('<div class="rom-money rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($MoneyDiv);

		$MoneyDiv.css('left', $leftpos + 'px')

		$MoneyDiv.css({top: $(document).scrollTop() - 100});

		$MoneyDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}