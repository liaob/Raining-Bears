
if (intervalBear != undefined && intervalBear != '') {
	clearInterval(intervalBear);
	intervalBear = ''
}

else {
		var intervalBear = setInterval(function() {

		var $BearDiv = $('<div class="rom-bear rain--item"></div>');
		var $leftpos = Math.random() * $(window).width();

		$('body').append($BearDiv);

		$BearDiv.css('left', $leftpos + 'px')

		$BearDiv.css({top: $(document).scrollTop() - 100});

		$BearDiv.animate({
			top: $(document).scrollTop() + $(window).height()-100
		}, 2000, "easeInQuad", function(){

		$(this).remove();

	});

	}, 125);
}