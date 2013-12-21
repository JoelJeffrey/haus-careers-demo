$('.panel').on('click', function() {
	console.log('working?');
	$this = $(this);
	$('.center').empty('p');
	$this.find('p').appendTo('.center');
	});