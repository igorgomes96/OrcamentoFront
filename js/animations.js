$(document).ready(function() {

	$(document).on('click', 'a[data-target]', function() {
		$($(this).attr('data-target')).collapse('toggle');
	});

	// $(document).on('click', '.nav-link', function() {
	// 	$(this).parent().parent().children().each(function() {
	// 		$(this).find('.active').removeClass('active');
	// 	});
	// 	$(this).addClass('active');
	// 	console.log('Teste');
	// });
});	