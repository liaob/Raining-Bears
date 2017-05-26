
if (intervalPoop != undefined && intervalPoop != '') {
	clearInterval(intervalPoop);
	intervalPoop = ''
}

else {
	// start interval
	var intervalPoop = setInterval(function() {


		// this runs every second

		var $PoopDiv = $('<div class="rom-poop rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();


		$('body').append($PoopDiv);

		$PoopDiv.css('left', $leftpos + 'px')

		$PoopDiv.css({top: $(document).scrollTop() - 100});

		$PoopDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

	});

	}, 100);
}