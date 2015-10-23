
$('.hero').filter(':first').addClass('shown');

$('button.next').on('click', function(e) { 
	
	if ( $('.shown').is(':last-child') ) {
		 $('.shown').removeClass('shown');
		 $('.hero').filter(':first').addClass('shown');

	}
	else {
		$('.shown').removeClass('shown').next().addClass('shown');
	}

	var caption = $('.shown').attr('title');
	$('.name').text(caption).show().FadeOut(1000);

});