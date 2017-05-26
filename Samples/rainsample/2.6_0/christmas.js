
if (intervalChristmas != undefined && intervalChristmas != '') {
	clearInterval(intervalChristmas);
	intervalChristmas = ''
}

else {
	// start interval
	var intervalChristmas = setInterval(function() {

		// this runs every second

		var $SantaDiv = $('<div class="rom-santa rain--item"></div>');
		var $SnowmanDiv = $('<div class="rom-snowman rain--item"></div>');
		var $TreeDiv = $('<div class="rom-tree rain--item"></div>');
		var $leftpos1 = Math.random() * $(window).width();
		var $leftpos2 = Math.random() * $(window).width();
		var $leftpos3 = Math.random() * $(window).width();


		$('body').append($SantaDiv);
		$('body').append($SnowmanDiv);
		$('body').append($TreeDiv);

		$SantaDiv.css('left', $leftpos1 + 'px');
		$SnowmanDiv.css('left', $leftpos2 + 'px');
		$TreeDiv.css('left', $leftpos3 + 'px');

		$SantaDiv.css({top: $(document).scrollTop() - 100});
		$SnowmanDiv.css({top: $(document).scrollTop() - 100});
		$TreeDiv.css({top: $(document).scrollTop() - 100});

		$SantaDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

		});


		$SnowmanDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

		});



		$TreeDiv.animate({
			top: $(document).scrollTop() + $(window).height()
		}, 2000, "easeInQuad", function() {

		//after animation is complete, remove the Poop
		$(this).remove();

		});

	}, 300);
}