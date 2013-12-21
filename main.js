$('.benefits').find('div').click(function() {
	$this = $(this);
	$this.removeClass('.show');
	$this.find("p").addClass('.show');
})