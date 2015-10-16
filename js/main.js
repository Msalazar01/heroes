
$('.hero').filter(':first').addClass('shown');

$('h1').text("Batman");

$('button.next').on('click', function(e) { 
	
	$('.shown').next().addClass('shown');
	$('.shown').filter(':first').removeClass('shown');

});